import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { setStep } from "../../../redux/slices/courseSlice";

import CourseInformation from "./CourseInformation";
import CourseBuilder from "./CourseBuilder";
import PublishCourse from "./PublishCourse";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div className="flex  w-full flex-col">
      <div className="flex justify-center items-center">
        {steps.map((item, index) => (
          <>
            <div key={index} className="">
              <div
                key={index}
                className={`${
                  item.id === step
                    ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } flex flex-row h-10 items-center justify-center w-10 rounded-full`}
              >
                {step > item.id ? <FaCheck /> : item.id}
              </div>
            </div>
            {item.id !== steps.length && (
              <div key={index} className={`px-2`}>
                -----------------
              </div>
            )}
          </>
        ))}
      </div>
      <div className="w-[90%] mx-auto mt-6">
        {step === 1 && <CourseInformation />}
        {step === 2 && <CourseBuilder />}
        {step === 3 && <PublishCourse />}
      </div>
    </div>
  );
};

export default RenderSteps;
