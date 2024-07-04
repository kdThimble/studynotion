import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../Reusable/IconBtn";
import { BiSolidEdit } from "react-icons/bi";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div className=" p-7 flex flex-col gap-5  mx-auto">
      <h1 className="text-3xl text-center font-bold tracking-wider text-richblack-5">
        My Profile
      </h1>
      <div className="min-w-[70%] mx-auto flex flex-col gap-3 ">
        {/* section 1 */}
        <div className="flex justify-between w-full items-center bg-richblack-800 p-4 rounded-md border-[1px] border-richblack-700">
          <div className="flex items-center gap-3">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className="aspect-square w-[78px] rounded-full object-cover"
            />
            <div>
              <p className="text-richblack-5">
                {" "}
                {user?.firstName + " " + user?.lastName}{" "}
              </p>
              <p className="text-[12px] text-richblack-300 mt-1">
                {" "}
                {user?.email}
              </p>
            </div>
          </div>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/my-settings");
            }}
          >
            <BiSolidEdit />
          </IconBtn>
        </div>

        {/* section 2 */}
        <div className="flex justify-between flex-col items-center w-full bg-richblack-800 p-4 rounded-md border-[1px] border-richblack-700 gap-5 ">
          <div className="w-full flex justify-between ">
            <p className="text-2xl text-richblack-25 font-bold">
              Personal Details
            </p>
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/my-settings");
              }}
            >
              {" "}
              <BiSolidEdit />{" "}
            </IconBtn>
          </div>
          <div className="flex gap-28 w-full ">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-richblack-300 ">First Name</p>
                <p className="text-richblack-25 mt-1">{user?.firstName}</p>
              </div>
              <div>
                <p className="text-richblack-300 ">Email</p>
                <p className="text-richblack-25 mt-1">{user?.email}</p>
              </div>
              <div>
                <p className="text-richblack-300 ">Gender</p>
                <p className="text-richblack-25 mt-1">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-richblack-300 ">Last Name</p>
                <p className="text-richblack-25 mt-1">{user?.lastName}</p>
              </div>
              <div>
                <p className="text-richblack-300 ">Phone Number</p>
                <p className="text-richblack-25 mt-1">
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className="text-richblack-300 ">Date of Birth</p>
                <p className="text-richblack-25 mt-1">
                  {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex justify-between flex-col  w-full bg-richblack-800 p-4 rounded-md border-[1px] border-richblack-700 gap-5 ">
          <div className="w-full flex justify-between">
            <p className="text-2xl text-richblack-25 font-bold">About</p>
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/my-settings");
              }}
            >
              {" "}
              <BiSolidEdit />{" "}
            </IconBtn>
          </div>
          <p className="text-richblack-300">
            {" "}
            {user?.additionalDetails?.about ?? "Write Something about Yourself"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
