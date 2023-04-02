import React, { useEffect, useState } from "react";

const CalcApp = () => {
  let [inputData, setInputData] = useState("");
  console.log(inputData);

  const handleDelete = () => {
    setInputData(inputData.substring(0, inputData.length - 1));
  };

  const handleReset = () => {
    setInputData("");
  };

  const handleResult = () => {
    console.log(inputData.split(""));
    if (inputData.split("").includes("+")) {
      const [num1, num2] = inputData.split("+");
      handleReset();
      setInputData(String(Number(num1) + Number(num2)));
    }
    if (inputData.split("").includes("-")) {
      const [num1, num2] = inputData.split("-");
      handleReset();
      setInputData(String(Number(num1) - Number(num2)));
    }
    if (inputData.split("").includes("/")) {
      const [num1, num2] = inputData.split("/");
      handleReset();
      setInputData(String(Number(num1) / Number(num2)));
    }
    if (inputData.split("").includes("x")) {
      const [num1, num2] = inputData.split("x");
      handleReset();
      setInputData(String(Number(num1) * Number(num2)));
    }
  };

  const [theme, setTheme] = useState("");
  const handleThemes = (num) => {
    if (num == 0) {
      setTheme("theme-themeOne");
    }
    if (num == 1) {
      setTheme("theme-themeTwo");
    }
    if (num == 2) {
      setTheme("theme-themeThree");
    }
  };

  const calcContent = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
  ];

  const items = calcContent.map((val, i) => (
    <span
      key={i}
      className={
        i === 3
          ? `w-16 md:w-20 h-10 justify-center text-whitebg cursor-pointer bg-specialkeysbg items-center font-bold text-xl flex rounded-md shadow-custom shadow-specialkeysshadow`
          : `w-16 md:w-20 h-10 justify-center cursor-pointer  text-num shadow-custom shadow-keyshadow bg-keysbg items-center font-bold text-2xl flex rounded-md`
      }
      onClick={() => (i === 3 ? handleDelete() : setInputData(inputData + val))}
    >
      {val}
    </span>
  ));

  useEffect(() => {
    handleThemes(0);
  }, []);
  return (
    <div
      className={`flex flex-col justify-center p-10 sm:p-0 w-screen bg-bodybg space-y-4 items-center h-screen ${theme}`}
    >
      {/* header */}
      <div className="text-whitebg flex items-end justify-between w-[336px] md:w-[400px] rounded-lg">
        <h2 className="font-bold text-xl">Calc</h2>
        <div className="space-x-2 flex items-end">
          <span className="text-xs">THEME</span>
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="range"
              className="text-xs font-semibold w-14 flex justify-around"
            >
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </label>
            <input
              id="range"
              type="range"
              min={0}
              defaultValue={0}
              max={2}
              className="w-14"
              onChange={(e) => handleThemes(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* screen */}
      <div className=" bg-screenbg w-[336px] md:w-[400px] h-[100px] text-whitebg rounded-md flex justify-end items-center text-2xl font-bold p-4">
        {inputData.length > 0 ? inputData : 0}
      </div>
      {/* numbers */}
      <div className="p-4 bg-keybg flex gap-4 flex-wrap w-[336px] md:w-[400px] rounded-lg">
        {items}
        <div className="flex w-full text-whitebg gap-4">
          <button
            className={`w-1/2 h-10 justify-center shadow-custom  shadow-specialkeysshadow bg-specialkeysbg items-center font-bold text-xl flex rounded-md`}
            onClick={() => handleReset()}
          >
            RESET
          </button>
          <button
            className={`w-1/2 h-10 justify-center shadow-custom shadow-orangekeyshadow 
            bg-orangekeybg text-numeq items-center font-bold text-2xl flex rounded-md`}
            onClick={() => handleResult()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalcApp;
