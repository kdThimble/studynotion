import React from 'react'
import Instructor from "../../assets/Images/Instructor.png"

import { FaArrowRight } from 'react-icons/fa'
import HighlightText from './Reusable/HighlightText'
import CTAButton from './Reusable/CTAButton'

const InstructorSection = () => {
  return (
    <div className='mt-20'>
      <div className='flex flex-col md:flex-row gap-20 items-center'>

              <div className='relative md:w-[50%] w-full'>
                  <div className="absolute w-full h-full bg-white top-2 z-10 left-2 md:top-4 md:left-4 "></div>
            <img
                src={Instructor}
                alt=""
                className='shadow-white  relative z-50'
            />
        </div>

              <div className='md:w-[50%] w-full flex flex-col gap-10'>
                  
            <div className='text-4xl font-semobold w-[80%]'>
                Become an
                <HighlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection