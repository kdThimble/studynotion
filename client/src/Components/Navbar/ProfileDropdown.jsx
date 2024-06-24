import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiArrowDropDownLine } from "react-icons/ri";
import { logout } from '../../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';

function ProfileDropDown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  console.log(user);
  function handleClick() {
    
  }
  const navigate = useNavigate()
  return (
    <>
    <div className='text-white relative flex gap-1 items-center group'>
      <div className='h-9 w-9 rounded-full overflow-hidden bg-white'>
        <img src={user.image} alt="Le re lund ke" />
      </div>
        <RiArrowDropDownLine size={30} />
               <div className='invisible absolute left-[50%]
                                    translate-x-[-55%] z-50 translate-y-[45%]
                                 top-[50%]
                                flex flex-col rounded-md bg-richblack-700 p-4 text-richblack-25
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[200px]'>

                                <div className='absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-700 '>
        </div>
          <button className='hover:cursor-pointer text-sm font-semibold' onClick={()=>{dispatch(logout(navigate))}}>
            Logout
        </button>
        </div>
      </div>

      </>
  )
}

export default ProfileDropDown