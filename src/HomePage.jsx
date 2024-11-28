import React, { useState } from "react";
import Navbar from "./Navbar";
import arrowLeft from "./ArrowLeft.png";
import toolTip from "./Tooltip.png";

function HomePage() {
  const [value, setValue] = useState(1);
  const [selectedAge, setSelectedAge] = useState("");
  const [checkedConditions, setCheckedConditions] = useState([]);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleCheckboxChange = (condition) => {
    setCheckedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((item) => item !== condition) // Remove if unchecked
        : [...prev, condition] // Add if checked
    );
  };

  return (
    <>
      <Navbar />
      <div className="font-poppins bg-[#FCFAF5] max-w-screen  h-screen px-[20px]  flex-col overflow-x-hidden  md:px-[120px]">
        
        <div className="flex flex-row gap-2 mt-[15px]">
          <img src={arrowLeft} alt="arrow" className="md:hidden w-[24px] h-[24px]" />
          <h1 className="md:hidden text-[18px] mb-[10px]">IVF Success Rate Calculator</h1>
        </div>
        <h1
        className="font-semibold max-md:hidden "
        ><span className="font-normal">Home </span>/ IVF Success Rate Calculator</h1>
        
        
        <div className="flex-col md:grid-cols-3 md:flex md:justify-center md:items-center" >
          <h1 className="text-[16px] mb-[10px] md:flex md:items-center md:justify-center md:text-[28px]">Which age range applies to you?</h1>
          <div className="grid  gap-4 md:grid-cols-3 md:justify-center">
      {[
        { label: "Under 30", value: "under-30" },
        { label: "Between 30 - 34", value: "30-34" },
        { label: "Between 35 - 37", value: "35-37" },
        { label: "Between 38 - 40", value: "38-40" },
        { label: "Between 41 - 43", value: "41-43" },
        { label: "Above 43", value: "above-43" },
      ].map((option) => (
        <label
          key={option.value}
          className="flex items-center justify-start gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name="age"
            value={option.value}
            onChange={(e) => setSelectedAge(e.target.value)}
            checked={selectedAge === option.value}
            className="w-[18px] h-[18px] accent-[#F48265] focus:ring-[#F48265] cursor-pointer"
          />
          <span
            className={`text-[14px] md:text-[20px] ${
              selectedAge === option.value
                ? "font-semibold opacity-100"
                : "opacity-80 font-normal"
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
        </div>

        
        <h1 className="mt-[10px] mb-[25px] md:text-center md:text-[28px] md:mt-[44px] ">Number of IVF Cycles?</h1>
        <div className="relative w-full max-w-[600px] mx-auto">
  
  <div>
    <img
      src={toolTip}
      className="w-[28px] h-[26px] absolute -top-6"
      style={{
        left: `calc(${((value - 1) / 9) * 100}% - 10px)`,
      }}
    />
    <h1
      className="absolute text-white -top-6 ml-[9px]"
      style={{
        left: `calc(${((value - 1) / 9) * 100}% - 10px)`,
      }}
    >
      {value}
    </h1>
  </div>

 
  <input
    type="range"
    min="1"
    max="10"
    step="1"
    value={value}
    onChange={handleChange}
    style={{
      background: `linear-gradient(to right, #F48265 0%, #F48265 ${
        ((value - 1) / 9) * 100
      }%, #e5e7eb ${((value - 1) / 9) * 100}%, #e5e7eb 100%)`,
    }}
    className="accent-[#F48265] w-full h-2 rounded-lg appearance-none cursor-pointer"
  />

 
  <div className="absolute w-full left-0 top-[9px] flex justify-between">
    {[...Array(10)].map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full ${
          index + 1 <= value ? "bg-[#F48265]" : "bg-gray-400"
        }`}
      ></div>
    ))}
  </div>
</div>

           
        <div className="md:justify-cente md:text-center md:mt-[40px]">
          <h1 className="text-[16px] md:text-[28px] md:font-semibold md:mb-[16px] max-md:mt-[20px] max-md:mb-[10px]">Have you undergone these procedures before?</h1>
          <div className="md:flex md:ml-[305px] 3xl:ml-[485px] md:gap-x-[25px]">
          <div className="flex gap-x-[18px] ">
            <h1 className="text-[14px] md:text-[20px] font-semibold">ICSI Procedure:</h1>
            <input type="radio" name="yesOrNo1" />
            <h1 className="text-[14px] md:text-[20px] ">Yes</h1>
            <input type="radio" name="yesOrNo1" />
            <h1 className="text-[14px] md:text-[20px]">No</h1>
          </div>
          <div className="flex gap-x-[18px]">
            <h1 className="text-[14px] mr-[20px] md:text-[20px] font-semibold">PGT Testing:</h1>
            <input type="radio" name="yesOrNo2" className="" />
            <h1 className="text-[14px] md:text-[20px]">Yes</h1>
            <input type="radio" name="yesOrNo2" className="" />
            <h1 className="text-[14px] md:text-[20px] ">No</h1>
          </div>
          </div>
        </div>
        
        <div  className="md:justify-center md:text-center ">
          <h1 className="md:text-[28px] md:font-semibold md:mt-[40px] md:mb-[16px] max-md:mt-[20px] max-md:mb-[10px]">Do you have any of these medical conditions?</h1>
          
          <div className="md:flex md:pl-[200px] 3xl:pl-[377px]">
          {[
            "PCOS",
            "Endometriosis",
            "Low Ovarian Reserve",
            "Male Factor Infertility",
          ].map((condition) => (
            <label
              key={condition}
              className="flex items-center space-x-3 cursor-pointer mb-[10px] "
            >
              <input
                type="checkbox"
                className="w-5 h-5 md:w-[22px] border-2 border-[#F48265] md:h-[22px] accent-[#F48265] checked:text-white md:ml-[21px]"
                onChange={() => handleCheckboxChange(condition)}
                checked={checkedConditions.includes(condition)}
              />
              <h1
                className={`text-[14px] md:text-[20px]  ${
                  checkedConditions.includes(condition)
                    ? "opacity-100  font-medium"
                    : "opacity-80 "
                }`}
              >
                {condition}
              </h1>
            </label>
          ))}
          </div>
         
        </div>
        <p className="text-center">
        <button
        className="w-[147px] h-[47px] rounded-[6px] bg-[#D75555] text-white text-[16px] font-semibold md:mt-[45px]  "
        >Calculate</button>
        </p>
      </div>
    </>
  );
}

export default HomePage;
