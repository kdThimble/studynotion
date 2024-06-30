import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../Reusable/CTAButton";
import HighlightText from "../Reusable/HighlightText";
import { TypeAnimation } from "react-type-animation";

function CodeBlocks({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  gradientimg,
  codeColor,
}) {
  return (
    <div className={`flex ${position} md:my-20 my-2 justify-between gap-10 md:flex-row flex-col`}>
          <div className="md:w-1/2 w-full flex flex-col gap-8">
              
        {heading}
        <div >{subheading}</div>
              
              <div className="flex md:flex-row flex-col gap-7 mt-7">
        <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
          <div className="flex gap-2 items-center justify-center text-sm md:text-base ">
            {ctabtn1.text}
            <FaArrowRight />
          </div>
        </CTAButton>
        <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
          {ctabtn2.text}
        </CTAButton>
      </div>
          </div>
          {/* //section 2 */}
          <div className=" min-h-[370px] md:min-h-[300px] relative flex gap-10 md:w-1/2 xl:w-[45%] w-full bg-[#050f1d] p-4 rounded-lg">
             <img
          className="absolute left-[-150px] top-[-100px]"
          width={500}
          src={gradientimg}
        />
              <div className="flex flex-col w-[2%] md:text-base text-[14px] font-inter font-bold text-center text-richblack-400">
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
              </div>
              <div className={`font-mono w-[80%] md:text-base text-[12px] flex flex-col gap-2 font-bold ${codeColor} pr-2`}>
                  <TypeAnimation sequence={[codeblock, 2000, ""]} repeat={Infinity} cursor={true}
                      style={{
                      whiteSpace:"pre-line"
                      }}
            omitDeletionAnimation={true}
            className="font-mono font-bold text-transparent bg-gradient-to-r from-[#ffffff] to-[#3fd1c2] bg-clip-text"
                  />
              </div>
              
          </div>
      
    </div>
  );
}

export default CodeBlocks;