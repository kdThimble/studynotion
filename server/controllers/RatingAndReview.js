const RatingAndReviews = require("../models/RatingAndReview");
const User = require("../models/User");
const Course = require("../models/Course");

//createRatingAndReviews
async function createRatingAndReviews(req, res) {
  try {
    //get userId
    const userId = req.user.id;
    //fetchData from req.body
    const { courseId, rating, review } = req.body;
    //check if user is enrolled in course or not
    const user = await User.findById(userId);
    if (!user.courses.includes(courseId)) {
      return res.status(400).json({
        success: false,
        message:
          "User isn't enrolled in this Course. Purchase and complete to write a review",
      });
    }
    //check if user has already reviewed the course
    const alreadyReviewed = await RatingAndReviews.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "User have already reviewed this course",
      });
    }
    //create a ratingAnd Review now
    const ratingReview = await RatingAndReviews.create({
      course: courseId,
      user: userId,
      rating,
      review,
    });
    const updatedCourse = await Course.findByIdAndUpdate(courseId, {
      $push: { ratingAndReviews: ratingReview._id },
    });
    console.log(updatedCourse);
    //return success response
    return res.status(200).json({
      success: true,
      message: "Rating and Review Sent successfully",
      ratingReview,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Cannot add review",
    });
  }
}
//getAvgRatingAndReviews
async function getAvgRating(req, res) {
  try {
    //get courseId
    const { courseId } = req.body;
    //aggregate pipelien always returns an array
    const result = await RatingAndReviews.aggregate([
      //idhar confirm kerna h ki mongoose.types.objectId lagega ya ni , badme confirm kerunga
      { $match: { course: courseId } },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "rating" },
        },
      },
    ]);
    //return rating
    if (result.length > 0) {
      //0 se jayda length h to rating milgyi matlab
      return res.status(200).json({
        success: true,
        message: `Average Rating is ${result[0].averageRating}`,
        averageRating: result[0].averageRating,
      });
    }
    //if no rating exist
    return res.status(200).json({
      success: true,
      message: "No ratings given till now",
      averageRating: 0,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Cannot find avg rating",
    });
  }
}
//course specific all rating and review

//getAllRatingAndReviews for home page (it includes diff courses aswell)
async function getAllRatingAndReviews(req, res) {
  try {
    const allReviews = await RatingAndReviews.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      });
    return res.status(200).json({
      success: true,
      data: allReviews,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Cannot get All Ratings and Reviews",
    });
  }
}

module.exports = { createRatingAndReviews, getAvgRating ,getAllRatingAndReviews};