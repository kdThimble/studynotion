import React from "react";
import RenderSteps from "./RenderSteps";
import { AiTwotoneThunderbolt } from "react-icons/ai";

function AddCourse() {
  return (
    <div className="text-richblack-5 p-6  w-[100%] mx-auto">
      <h1 className="text-3xl">Add Course</h1>
      <div className="flex gap-6 mt-6 justify-between">
        <div className="w-[75%]">
          <div>
            <RenderSteps />
          </div>
        </div>
        <div className="w-[40%] h-fit p-5 bg-richblack-800 rounded-xl">
          <div className="flex items-center">
            <AiTwotoneThunderbolt size={20} className="text-yellow-25 " />

            <p className="font-semibold text-xl h-fit">Code Upload Tips</p>
          </div>

          <ul className="list-disc pl-4 mt-2 text-sm gap-2 flex flex-col text-richblack-200">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
