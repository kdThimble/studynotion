import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { setCourse, setEditCourse } from "../../redux/slices/courseSlice";

const SidebarLink = ({ link }) => {
  const Icon = Icons[link.icon];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoute = (route) => {
    return location.pathname.includes(route);
  };
  return (
    <NavLink
      key={link.id}
      to={link.path}
      onClick={() => {
        dispatch(setEditCourse(false));
        dispatch(setCourse(null));
      }}
      className={`relative px-8 py-2 flex gap-4 text-sm font-medium ${
        matchRoute(link.path) ? "bg-yellow-700" : "bg-opacity-0"
      }`}
    >
      <span
        className={`absolute left-0 top-0 h-full w-[0.2rem]  bg-yellow-50 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        } `}
      ></span>
      <Icon className="text-white text-lg" />
      <p className="text-white">{link.name}</p>
    </NavLink>
  );
};

export default SidebarLink;
