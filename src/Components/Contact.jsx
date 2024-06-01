import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
    return (
      <div
        id="contact"
        name="contact"
        className="w-full h-screen flex flex-col justify-center items-center p-4  bg-[#0a192f]"
      >
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#53d6b8] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 w-8/12 text-center text-xl">
            Let's Connect! Feel free to reach out to me via email. I'm always
            excited to chat about projects, opportunities, and ideas. Looking
            forward to hearing from you.
          </p>
        </div>
        <a
          href="mailto:mahamuniyash@gmail.com"
          className=" getintouch border-2 text-[#53d6b8] border-[#53d6b8] font-medium text-lg px-4 py-3 my-8 mx-auto flex items-center transition-all rounded-md"
        >
          Get In Touch!
        </a>

        <div className="mobileViewSocial flex items-center mb-5">
          <a
            className="text-gray-300 pr-1 transition-all hover:-translate-y-1 hover:text-blue-500"
            href="https://www.linkedin.com/in/yashwant-mahamuni/"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            className="text-gray-300 px-2 transition-all hover:-translate-y-1 hover:text-[#171515]"
            href="https://github.com/yashbm45/"
          >
            <FaGithub size={35} />
          </a>
          <a
            className="text-gray-300 px-2 transition-all hover:-translate-y-1 hover:text-[#00acee]"
            href="https://leetcode.com/u/yashwant45/"
          >
            <SiLeetcode size={35} />
          </a>
        </div>

      </div>
      
    );
  }
  
  export default Contact