import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "./Reusable/CTAButton";
import HighlightText from "./Reusable/HighlightText";
import { TypeAnimation } from "react-type-animation";

function CodeBlocks({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) {
  return (
    <div className={`flex ${position} md:my-20 my-2 justify-between gap-10 md:flex-row flex-col`}>
          <div className="md:w-1/2 w-full flex flex-col gap-8">
              
        {heading}
        <div >{subheading}</div>
              
              <div className="flex gap-7 mt-7">
        <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
          <div className="flex gap-2 items-center">
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
          <div className=" relative flex gap-10 md:w-1/2 w-full bg-[#050f1d] p-4 rounded-lg">
              {/* <div className="absolute top-[-1rem] left-1 w-[300px] h-[250px] rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 opacity-20"></div> */}
              <div className="flex flex-col w-[10%] md:text-base text-[14px] font-inter font-bold text-center text-richblack-400">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
              </div>
              <div className={`font-mono w-[90%] md:text-base text-[12px] flex flex-col gap-2 font-bold ${codeColor} pr-2`}>
                  <TypeAnimation sequence={[codeblock, 2000, ""]} repeat={Infinity} cursor={true}
                      style={{
                      whiteSpace:"pre-line"
                      }}
                      omitDeletionAnimation={true}
                  />
              </div>
              
          </div>
      
    </div>
  );
}

export default CodeBlocks;