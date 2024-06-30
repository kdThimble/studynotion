import React from 'react'
import {LearningGridArray} from "../../data/learning-grid"
import HighlightText from '../Reusable/HighlightText';
import CTAButton from '../Reusable/CTAButton';

function LearningGrid() {
    console.log(LearningGridArray)
  return (
    <div className='grid lg:w-10/12 md:mt-20 mt-10 w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
      {
        LearningGridArray.map((card, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? "md:col-span-2   p-4 pl-5 bg-transparent":"m-4 md:m-3  lg:m-0 rounded-xl md:rounded-md lg:rounded-none"} 
              ${
                card.order % 2 ===1 ? "bg-richblack-700 " : "bg-richblack-800"
              }
              ${card.order === 3 && "lg:col-start-2"}
              `}
            >
              {
                card.order < 0 ?
                  (<div className='flex flex-col gap-5'>
                    <div className='md:text-4xl text-3xl text-richblack-25 w-11/12 md:w-8/12'>
                      {card.heading}
                      <HighlightText text={card.highlightText}/>
                    </div>
                    <p className='w-10/12 text-richblack-300'>
                      {card.description}
                    </p>
                    <div className='mt-8 w-5/12 mb-10 md:mb-0 lg:w-4/12'>
                      <CTAButton active={true} linkTo={card.BtnLink}>{card.BtnText }</CTAButton>
                    </div>

                  </div>) :
                  (<div className='p-8 flex flex-col gap-8 lg:min-h-[18rem]  md:min-h-[10rem]'>
                    <h1 className='text-xl font-bold text-richblack-25'>{card.heading}</h1>
                    <p className='text-richblack-300'>{ card.description}</p>

                  </div>)
              }

            </div>
          );
        })
    }
    </div>
  )
}

export default LearningGrid