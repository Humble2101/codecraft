import React from "react";
import { NavLink } from "react-router-dom";

function LOgin() {
  return (
    <div className="w-[100%] h-[100vh] shadow-2xl  bg-black flex items-center justify-around flex-col">
      <div className="w-[90%] h-[7%] text-2xl font-bold text-white font-serif flex items-center justify-start">
        Code
        <span className="text-[cornflowerblue] text-3xl font-bold">
          C<span className="text-xl">raft</span>
        </span>
      </div>
      <div className="w-[60%] h-[80%] bg-white rounded-md shadow-2xl flex items-center justify-around flex-col">
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          className="w-[55%] h-[10%] border-2 border-[cornflowerblue] outline-none rounded-md md:pl-5 pl-1 md:text-base text-sm placeholder:font-serif"
        />
        <input
          type="text"
          name="email"
          placeholder="Email/Phone number"
          className="w-[55%] h-[10%] border-2 border-[cornflowerblue] outline-none rounded-md md:pl-5 pl-1 md:text-base text-sm placeholder:font-serif"
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          className="w-[55%] h-[10%] border-2 border-[cornflowerblue] outline-none rounded-md md:pl-5 pl-1 md:text-base text-sm placeholder:font-serif"
        />

        <button className="lg:w-[15%] w-[40%] h-[8%] bg-[cornflowerblue] text-white rounded-md font-serif font-semibold text-lg">
          Submit
        </button>
        <p className="text-sm">
          Don't have an account? {""}{" "}
          <NavLink
            to="/signup"
            className="text-[cornflowerblue] font-semibold font-serif"
          >
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LOgin;
