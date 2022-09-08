import React from "react";
import { FaTwitter, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { ReactComponent as Logo } from "../images/logo-white.svg";
const Footer = () => {
  return (
    <footer className="bg-VeryDarkViolet  text-white py-10">
      <div className=" w-10/12 mx-auto flex flex-col md:gap-28 gap-16 md:flex-row md:items-start md:text-left items-center text-center">
        <Logo />
        <div className="md:ml-auto">
          <h1>Features</h1>
          <ul className="[&>*]:text-GrayishViolet pt-4">
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>analytics</li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul className="[&>*]:text-GrayishViolet pt-4">
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h1>Company</h1>
          <ul className="[&>*]:text-GrayishViolet pt-4">
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="flex gap-6">
              <FaTwitter size={30} fill="#fff" />
              <FaInstagram size={30} fill="#fff" />
              <AiFillFacebook size={30} fill="#fff" />
              <FaGithubSquare size={30} fill="#fff" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
