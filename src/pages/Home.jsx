import React, { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io5";
import { DiPhp } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";

function Home() {
  const [javaScript, setJavaScript] = useState(false);
  const [scriptClose, setScriptClose] = useState(false);
  const [python, setPython] = useState(false);
  const [pytclose, setPytclose] = useState(false);
  const [php, setPhp] = useState(false);
  const [phpClose, setPhpClose] = useState(false);
  const [figma, setFigma] = useState(false);
  const [closeFigma, setCloseFigma] = useState(false);

  const openJavaScript = () => {
    setJavaScript(true);
  };

  const openPython = () => {
    setPython(true);
  };
  const closePython = () => {
    setPytclose(true);
    setPython(false);
  };

  const closeJavaScript = () => {
    setScriptClose(true);
    setJavaScript(false);
  };

  const openPhp = () => {
    setPhp(true);
  };
  const closePhp = () => {
    setPhp(false);
    setPhpClose(true);
  };

  const closeProductDesign = () => {
    setCloseFigma(true);
    setFigma(false);
  };

  const openProductDesign = () => {
    setFigma(true);
  };
  return (
    <div className="h-[200vh] w-[100%] font-serif font-semibold flex items-center justify-between flex-col">
      <div className="w-[100%] h-[30%] bg-[cornflowerblue] flex items-center justify-center">
        <div className="w-[20%] h-[100%] text-center flex flex-col items-center justify-center relative">
          <h1 className="text-3xl font-bold">Codecraft Academy</h1>
          <p>Offers the best programming courses </p>
          <p>And frameworks</p>
          <p>Online</p>
          <button className="text-white bg-[cornflowerblue] w-[40%] h-[11%] rounded-md">
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.6] rounded-md flex items-center justify-center font-serif font-semibold">
              Apply now
            </div>
          </button>
        </div>
        <div className="h-[20%] w-[100%] absolute bottom-20 flex items-center justify-around font-normal">
          <div className="h-[100%] w-[30%] flex bg-white items-center justify-around shadow-2xl rounded-lg">
            <span className="flex flex-col w-[40%]">
              Become a <span className="font-semibold">Front-end engineer</span>
            </span>
            <span className="font-semibold text-[cornflowerblue]">
              Know more {">"}
            </span>
          </div>
          <div className="h-[100%] w-[30%] flex bg-white items-center justify-around shadow-2xl rounded-lg">
            <span className="flex flex-col w-[40%]">
              Become a <span className="font-semibold">Back-end engineer</span>
            </span>
            <span className="font-semibold text-[cornflowerblue]">
              Know more {">"}
            </span>
          </div>
          <div className="h-[100%] w-[30%] flex bg-white items-center justify-around shadow-2xl rounded-lg">
            <span className="flex flex-col w-[40%]">
              Become a <span className="font-semibold">Product designer</span>
            </span>
            <span className="font-semibold text-[cornflowerblue]">
              Know more {">"}
            </span>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[30%] flex flex-col  justify-between">
        <div className="text-3xl">Trending courses</div>
        <div className="h-[80%] w-[95%] relative flex items-center justify-between">
          <div
            className="h-[100%] w-[22%] bg-[cornflowerblue] shadow-2xl rounded-xl cursor-pointer"
            onMouseOver={openJavaScript}
            onMouseOut={closeJavaScript}
          >
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.8] flex flex-col items-center justify-center rounded-xl">
              <IoLogoJavascript className="text-[yellow] text-8xl " />
              <p className="text-white">JavaScript</p>
            </div>
          </div>
          {javaScript && (
            <div className="w-[22%] h-[100%] rounded-xl bg-black absolute top-0 bg-opacity-[0.9] text-white flex justify-center flex-col pl-10">
              <p>HTML, CSS</p>
              <p>Tailwind</p>
              <p>JavaScript</p>
              <p>ReactJs</p>
              <p>NextJs</p>
              <p>NodeJs</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          )}
          <div
            className="h-[100%] w-[22%] bg-[cornflowerblue] shadow-2xl rounded-xl cursor-pointer"
            onMouseOver={openPython}
            onMouseOut={closePython}
          >
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.8] flex flex-col items-center justify-center rounded-xl">
              <IoLogoPython className="text-[yellow] text-8xl " />
              <p className="text-white">Python</p>
            </div>
          </div>
          {python && (
            <div className="w-[22%] h-[100%] rounded-xl bg-black absolute left-[16.6em] top-0 bg-opacity-[0.9] text-white flex justify-center flex-col pl-10">
              <p>HTML, CSS</p>
              <p>Tailwind</p>
              <p>Django</p>
              <p>Rest</p>
              <p>ReactJs</p>
            </div>
          )}
          <div
            className="h-[100%] w-[22%] bg-[cornflowerblue] shadow-2xl rounded-xl cursor-pointer"
            onMouseOver={openPhp}
            onMouseOut={closePhp}
          >
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.8] flex flex-col items-center justify-center rounded-xl">
              <DiPhp className="text-[blue] text-8xl " />
              <p className="text-white">PHP</p>
            </div>
          </div>
          {php && (
            <div className="w-[22%] h-[100%] rounded-xl bg-black absolute left-[33.4em] top-0 bg-opacity-[0.9] text-white flex justify-center flex-col pl-10">
              <p>HTML, CSS</p>
              <p>Tailwind</p>
              <p>JavaScript</p>
              <p>ReactJs</p>
              <p>NextJs</p>
              <p>NodeJs</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          )}
          <div
            className="h-[100%] w-[22%] bg-[cornflowerblue] shadow-2xl rounded-xl cursor-pointer"
            onMouseOver={openProductDesign}
            onMouseOut={closeProductDesign}
          >
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.8] flex flex-col items-center justify-center rounded-xl">
              <IoLogoFigma className="text-[#fc2d37] text-8xl " />
              <p className="text-white">Product design</p>
            </div>
          </div>
          {figma && (
            <div className="w-[22%] h-[100%] rounded-xl bg-black absolute left-[50em] top-0 bg-opacity-[0.9] text-white flex justify-center flex-col pl-10">
              <p>HTML, CSS</p>
              <p>Tailwind</p>
              <p>JavaScript</p>
              <p>ReactJs</p>
              <p>NextJs</p>
              <p>NodeJs</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-[80%] h-[20%] flex flex-col  justify-between mb-5">
        <div className="text-3xl">Blogs</div>
        <div className="w-[100%] h-[75%] flex items-center justify-between">
          <div className="h-[100%] w-[45%] shadow-2xl flex flex-col items-center justify-center text-xl">
            <p>Frequently asked interview questions</p>
            <span>on all programming languages</span>
            <span className="text-[cornflowerblue] cursor-pointer">
              More {">"}
            </span>
          </div>
          <div className="h-[100%] w-[45%] shadow-2xl flex flex-col items-center justify-center text-xl">
            <p>Blogs around Tech</p>
            <p> (Benefits, innovation, demerits etc)</p>
            <span className="text-[cornflowerblue] cursor-pointer">
              More {">"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
