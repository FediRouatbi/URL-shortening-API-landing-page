import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { BsJustify } from "react-icons/bs";
const Header = () => {
  const [navigation, setNavigation] = useState(false);
  return (
    <>
      <header className="fixed w-full z-40 py-2 bg-white  font-semibold   shadow-md text-Gray ">
        <div className="hidden md:flex items-center justify-between w-10/12 mx-auto">
          <ul className="flex gap-4 items-center">
            <li>
              <Logo />
            </li>
            <li className="">Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className=" flex gap-4">
            <button className="px-3 py-2 rounded-full ">Login</button>
            <button className="text-white bg-cyan px-5 py-2 rounded-full ">
              Sign Up
            </button>
          </div>
        </div>
        <div className=" md:hidden flex justify-between  items-center w-10/12 mx-auto">
          <Logo />
          <BsJustify
            size={35}
            fill="#000"
            onClick={() => setNavigation((prev) => !prev)}
          />
        </div>
      </header>
      <div className="fixed w-full top-14 z-30">
        <div
          className={`md:hidden  ${
            navigation
              ? "translate-y-0 opacity-100 "
              : "-translate-y-[120%]  opacity-0 "
          }  last  transition-all  w-10/12 mx-auto text-Gray   ease-in-out duration-500  bg-DarkViolet rounded-md p-5 text-center`}
        >
          <ul className="flex flex-col border-b-2 border-GrayishViolet/20 [&>*]:p-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="flex flex-col [&>*]:p-2">
            <button>Login</button>
            <button className="text-white bg-cyan px-5 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
