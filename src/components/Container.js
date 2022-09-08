import React from "react";

const Container = ({ Icon, title, paragraph, id }) => {
  console.log(id);
  return (
    <div
      className={`${id === 2 && "translate-y-10"} ${
        id === 3 && "translate-y-20"
      } bg-white px-8 md:w-5/12 mb-10  z-[1] w-7/8 text-center md:text-left pb-10  relative pt-20  rounded-md `}
    >
      <div className="absolute top-0  md:left-10 left-1/2 -translate-x-1/2  -translate-y-1/2  bg-DarkViolet  rounded-full p-4">
        <Icon />
      </div>
      <h1 className="text-VeryDarkViolet md:text-3xl text-2xl font-extrabold pb-3">
        {title}
      </h1>
      <p className=" mx-auto text-GrayishViolet font-bold">{paragraph}</p>
    </div>
  );
};

export default Container;
