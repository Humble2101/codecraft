import React from "react";

function Footer() {
  return (
    <div className="h-[50vh] w-[100%] bg-[black] flex items-center justify-around">
      <div className="w-[30%] h-[80%] flex flex-col text-start">
        <span className="text-2xl font-semibold text-[cornflowerblue]">
          Codecraft Academy
        </span>
        <p className="text-[cornflowerblue] text-lg">Certification Courses</p>
        <div className="h-[80%] text-white text-start font-semibold">
          <p>Javascript Certification course</p>
          <p>Python Certification course</p>
          <p>PHP Certification course</p>
          <p>Product design Certification course</p>
        </div>
      </div>
      <div className="w-[30%] h-[80%] text-white flex flex-col justify-between">
        <p className="text-2xl font-semibold text-[cornflowerblue]">Company</p>
        <div className="h-[80%] font-semibold">
          <p>About us</p>
          <p>News & Media</p>
          <p>Reviews</p>
          <p>contact us</p>
          <p>Community</p>
          <p>Blogs</p>
          <p>Locations</p>
        </div>
      </div>
      <div className="w-[30%] h-[80%] text-white">
        <p className="text-2xl font-semibold text-[cornflowerblue]">
          Work with us
        </p>
        <div className="h-[80%] font-semibold">
          <p>Careers</p>
          <p>Become an Instructor</p>
          <p>Become an affiliate</p>
          <p>Become a partner</p>
          <p>Hire from Codecraft Academy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
