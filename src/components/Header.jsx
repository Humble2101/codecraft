import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import LOgin from "../pages/LOgin";

function Header() {
  return (
    <div className="h-[15vh] bg-black flex items-center justify-between w-[100%]">
      <div className="w-[10%] h-[100%] text-2xl font-bold text-white font-serif flex items-center justify-end">
        Code
        <span className="text-[cornflowerblue] text-3xl font-bold">
          C<span className="text-xl">raft</span>
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter course, category or keyword"
        className="w-[30%] h-[40%] outline-none border-[cornflowerblue] border-2 pl-5 rounded-md"
      />
      <div className="bg-[cornflowerblue] w-[5%] h-[40%] relative right-[6em] flex items-center justify-center text-xl text-white">
        <FaSearch />
      </div>
      <div className="h-[100%] w-[40%] text-white flex items-center justify-around">
        <NavLink className="hover:text-[cornflowerblue] font-semibold font-serif">
          Corporate Training
        </NavLink>
        <NavLink className="hover:text-[cornflowerblue] font-semibold font-serif">
          Courses
        </NavLink>
        <NavLink className="hover:text-[cornflowerblue] font-semibold font-serif">
          Blog
        </NavLink>
        <NavLink
          to="/login"
          className="hover:text-[cornflowerblue] font-semibold font-serif"
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          className="hover:text-[cornflowerblue] font-semibold font-serif"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
