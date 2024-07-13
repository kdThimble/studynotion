
import './App.css'
import React, { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import VerifyEmail from './Pages/VerifyEmail'
import ForgotPassword from './Pages/ForgotPassword'
import UpdatePassword from './Components/UpdatePassword'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/Error'
import Dashboard from './Pages/Dashboard'
import EnrolledCourses from "./Components/Dashboard/EnrolledCourses";
import MyProfile from './Components/Dashboard/MyProfile'
import Settings from './Components/Dashboard/Settings'
import MyWishlist from './Components/Dashboard/MyWishlist'
import MyCourses from './Components/Dashboard/MyCourses'
import AddCourse from './Components/Dashboard/AddCourse'
import {jwtDecode} from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    // Function to logout user
    const logoutUser = () => {
      dispatch(setToken(null));
      dispatch(setUser(null));
      dispatch(resetCart());
      localStorage.removeItem("token"); // Clear token from local storage
      localStorage.removeItem("user"); // Clear user from local storage
      navigate("/login");
    };

    const checkTokenExpiration = () => {
      if (!token) {
        // Token not found, logout user
        logoutUser();
        return;
      }

      try {
        const decodedToken = jwtDecode(token); // Decode token
        const currentTime = Date.now() / 1000; // Convert current time to seconds
        // console.log(decodedToken)

        if (decodedToken.exp < currentTime) {
          // Token expired, logout user
          logoutUser();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        logoutUser();
      }
    };

    // Periodically checking token expiration(every ten minute)
    const intervalId = setInterval(checkTokenExpiration, 600000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [token]);
 

  return (
    <>
      <div className="min-h-screen w-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/update-password/:resetPasswordToken"
            element={<UpdatePassword />}
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route element={<Dashboard />}>
            <Route
              path="/dashboard/enrolled-courses"
              element={<EnrolledCourses />}
            />
            <Route path="/dashboard/my-profile" element={<MyProfile />} />
            <Route path="/dashboard/wishlist" element={<MyWishlist />} />
            <Route path="/dashboard/my-courses" element={<MyCourses />} />
            <Route path="/dashboard/add-course" element={<AddCourse />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
