import React, { useEffect, useState } from 'react'
import logo from  '../../assets/Logo/Logo-Full-Light.png'
import { Link, NavLink } from 'react-router-dom'
import { NavbarLinks } from "../../data/navbar-links"
import {  useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "./ProfileDropdown.jsx"
import { apiConnector } from '../../services/apiconnector.jsx'
import { categories } from '../../services/apis.js'
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart);
    console.log(token, "token");

    const [subLinks, setSubLinks] = useState([]);

    useEffect(() => {
      
        async function apicaller ()  {
            try {
                const result = await apiConnector("GET", categories.CATEGORIES_API);
                console.log(result.data);
                setSubLinks(result.data.data);
               
            
        } catch (error) {
            console.log("could not fetch the category list so sorry brother we failed you")
        }
        }
        apicaller();
      
    }, [])
    

  return (
      <div className='flex items-center h-14 border-b-richblack-700 border-b-[1px] bg-richblack-800' >
          <div className='flex w-11/12 max-w-maxContent items-center justify-between mx-auto'>
              <div>
                   <Link to={"/"}>
                  <img src={logo} alt="Logo aayega bhai" className='w-[70%]' loading='lazy'/>
              </Link>
              </div>
             
              <nav>
                  <ul className='flex gap-4 items-center'>
                      {
                          NavbarLinks.map((item, index) => (
                              <li key={index} className='text-richblack-25'>
                                  {
                                      item?.title === "Catalog" ? (
                                         <div className='relative flex hover:cursor-pointer items-center  group'>
                                <p>{item.title}</p>
                                <RiArrowDropDownLine size={30}/>

                                <div className='invisible absolute left-[50%]
                                    translate-x-[-50%] z-50 translate-y-[40%]
                                 top-[50%]
                                flex flex-col rounded-md bg-richblack-700 p-4 text-richblack-25
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px]'>

                                <div className='absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-700 '>
                                </div>

                                {
                                    subLinks.length ? (
                                            subLinks.map( (subLink, index) => (
                                                <Link to={`${subLink.name}`} key={index}>
                                                    <p className='font-semibold  capitalize mb-2 font-inter'>{subLink.name}</p>
                                                </Link>
                                            ) )
                                    ) : (<div></div>)
                                }

                                </div>


                            </div>
                                      ) : (
                                          <NavLink to={item?.path} className={({ isActive}) =>
                                            [
                                            isActive ? "text-[#ffd60a]" : "",
                                            ].join(" ")
                                        }
                                          >
                                              
                                              <p>{ item?.title}</p>
                                          </NavLink>
                                      )
                                  }
                              </li>
                          ))
                      }
                  </ul>
              </nav>
              <div className='flex gap-4 items-center'>
                  {
                      user && user?.accountType != "instructor" &&
                      (<Link className='relative' to={"/dashbaord/cart"}>
                          <AiOutlineShoppingCart className='text-white' size={30} />
                          {
                              totalItems > 0 ? (
                                  <span className=' text-[11px] absolute bg-pure-greys-200 text-center rounded-full h-4 w-4 top-0 right-0 text-white'>{totalItems}</span>
                              ): null
                          }

                      </Link>)
                  }
                  {
                      token === null &&
                      <div className='flex gap-4'>
                      <Link to="/login">
                          <button className='px-2 py-1 bg-richblack-700 rounded-md border-richblack-300 border text-richblack-25' type="button">Login</button>
                              </Link>
                              <Link to="/signup">
                            <button className='px-2 py-1 bg-richblack-700 rounded-md border-richblack-300 border text-richblack-25' type="button">Sign Up</button>
                              </Link>
                              </div>
                  }
                  {
                      token !== null && <ProfileDropDown />
                  }
                  
              </div>
        
              
          </div>
         
    </div>
  )
}

export default Navbar