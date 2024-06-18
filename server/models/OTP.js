const mongoose = require('mongoose');
const mailSender = require('../utils/mailsender');
const otpTemplate = require('../mail/templates/EmailVerification');

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:5 * 60
    }
});

//function to send email
async function sendVerifictionEmail(email, otp) {
    try {
        const mailResponse = await mailSender(email,'Verification email from study notion',otpTemplate(otp));
        
    } catch (error) {
        console.log("Erroroccured while sending email: ", error.message);
        
    }
}

otpSchema.pre('save', async function (next) {
    await sendVerifictionEmail(this.email, this.otp);
    next();
});

module.exports = mongoose.model('OTP', otpSchema);