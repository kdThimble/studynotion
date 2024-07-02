const express = require("express");
const router = express.Router();

//middleware
const { auth } = require("../middlewares/auth");

//controllers
const {
  updateProfile,
  deleteAccount,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/Profile");

// Delete User Account
router.delete("/deleteAccount", auth, deleteAccount);
router.put("/updateprofile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);

// Get Enrolled Courses
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.put("/updatedisplaypicture", auth, updateDisplayPicture);

module.exports = router;