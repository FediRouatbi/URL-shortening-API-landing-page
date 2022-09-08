import React from "react";
import { ReactComponent as Img } from "../images/illustration-working.svg";
const Hero = () => {
  return (
    <section className="w-10/12 md:mt-10  flex flex-col  md:flex-row-reverse  justify-between items-center mx-auto ">
      <div className="md:translate-x-48  md:w-1/2 -z-[10] scale-75 md:scale-100 translate-x-24 ">
        <Img />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2 items-center text-center md:text-left md:items-start ">
        <h1 className="md:text-7xl text-3xl leading-tight  font-bold text-VeryDarkBlue">
          More than just shorter links
        </h1>
        <p className="md:text-xl text-base text-Gray w-11/12">
          build your brand's recognition abd get detailed insights on how your
          links are performing.
        </p>
        <button className=" md:mt-7 mt-4 bg-cyan text-white px-5 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
