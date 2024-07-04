import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { setStep } from "../../../redux/slices/courseSlice";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


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
    <div className="flex justify-center items-center">
      {steps.map((item, index) => (
        <>
          <div className="">
            <div 
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
            <div className={`px-2`}>-----------------</div>
              )}
             
        </>
      ))}
    </div>
  );
};

export default RenderSteps;
