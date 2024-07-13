import React, { useEffect, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { getUserEnrolledCourses } from "../../services/operations/profileAPI";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { setEditCourse } from "../../redux/slices/courseSlice";
import { GoClockFill } from "react-icons/go";
import { setCourse } from "../../redux/slices/courseSlice";

function MyCourses() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to Fetch Enrolled Courses");
    }
  };

  function editHandler(course) {
    dispatch(setEditCourse(true));
    dispatch(setCourse(course));
    navigate("/dashboard/add-course");
  }

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <div className="text-richblack-5 p-6 w-11/12">
      <div className="flex justify-between">
        <h1 className="text-3xl">My Courses</h1>
        <button
          onClick={() => {
            dispatch(setEditCourse(false));
            dispatch(setCourse(null));
            navigate("/dashboard/add-course")
          }}
          className="flex font-semibold items-center hover:scale-95 transition-all duration-100 ease-out gap-1 bg-yellow-100 text-black px-4 py-2 rounded-md"
        >
          <GoPlusCircle size={20} />
          <p>New</p>
        </button>
      </div>
      <div>
        {!enrolledCourses ? (
          <div>Loading...</div>
        ) : !enrolledCourses.length ? (
          <p className="text-red-500 font-semibold text-2xl my-10">
            You have not Published Any Course Yet.
          </p>
        ) : (
          <div className="flex flex-col w-full border-[1px] rounded-md mt-6 border-richblack-700 pb-6">
            <div className="flex  bg-richblack-700 mb-6 pl-6 border-b-[1px] border-b-richblack-300 rounded-md py-4">
              <p className="w-[55%]">Courses</p>
              <p className="w-[15%]">Category</p>
              <p className="w-[15%]">Price</p>
              <p className="w-[15%]">Actions</p>
            </div>
            {/* Cards starting */}
            <div className="flex flex-col gap-10 pl-6">
              {enrolledCourses.map((course, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex gap-4 w-[55%]">
                    <div className="w-60  h-32">
                      <img
                        className="w-full h-full rounded-md object-cover"
                        src={course.thumbnail}
                      />
                    </div>

                    <div className="flex gap-3 flex-col w-full">
                      <p className="text-xl font-semibold">
                        {course.courseName}
                      </p>
                      <div className="text-sm text-richblack-300 w-11/12">
                        {course.courseDescription}
                      </div>

                      {course.status === "draft" ? (
                        <div className="bg-richblack-700 mt-2 justify-center flex items-center gap-2 text-red-400 rounded-full w-fit px-2 py-[4px] text-sm">
                          <GoClockFill />
                          Draft
                        </div>
                      ) : (
                        <div className="bg-richblack-700 flex items-center gap-2 text-yellow-50 rounded-full w-fit px-2 py-[4px] text-sm">
                          <FaCheckCircle />
                          Published
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="w-[15%]">{course.category.name}</div>
                  <div className="w-[15%] flex items-center gap-1 text-yellow-100">
                    <FaRupeeSign /> {course.price}
                  </div>
                  <div className="w-[15%] flex items-center gap-2 text-xl text-richblack-200">
                    <MdModeEdit
                      className="cursor-pointer"
                      onClick={() => editHandler(course)}
                    />
                    <RiDeleteBin5Line className="cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCourses;
