// Components/About.js
import React from "react";

function About() {
  return (
    <div id="about" className="w-full  text-gray-300 bg-[#0a192f] md:mt-4 ">
      <div className="about flex flex-col justify-center items-center h-full">
        <div className="max-w-[1000px] w-full">
          <div className=" pt-4 pb-4 aboutText">
            <p className="text-4xl font-bold inline border-b-4 border-[#53d6b8]  ml-5">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-[85%] my-2 ">
          <p>
            <span className="text-lg">H</span>ello! I am Yashwant a{" "}
            <span className="highlight">Computer Engineering graduate</span>{" "}
            from{" "}
            <span className="highlight">Savitribai Phule Pune University</span>,
            driven by a relentless passion for{" "}
            <span className="highlight">programming</span> and{" "}
            <span className="highlight">information technology</span>. This
            fervor took root during my{" "}
            <span className="highlight">Junior college</span> days and has since
            propelled me to excel in{" "}
            <span className="highlight">computer programming</span>. In the world of{" "}
            <span className="highlight">coding</span>, I am an{" "}
            <span className="highlight">artisan</span> of sorts, crafting
            creative yet practical <span className="highlight">programs</span>{" "}
            that transcend industries. My approach merges{" "}
            <span className="highlight">creativity</span> with{" "}
            <span className="highlight">problem-solving</span>, and I am ready
            to apply these skills to meaningful projects, gain{" "}
            <span className="highlight">real-world insights</span>, and flourish
            as an aspiring{" "}
            <span className="highlight">web developer</span>. <br />
            I'm enthusiastic about exploring career prospects in Software
            Engineering, <span className="highlight">Data Analytics</span> and{" "}
            <span className="highlight">DevOps</span>. As a proficient{" "}
            <span className="highlight">software engineer</span>, I bring a
            strong foundation in <span className="highlight">programming</span>{" "}
            and <span className="highlight">software development</span>. I'm
            also an effective <span className="highlight">communicator</span>,
            fostering <span className="highlight">collaboration</span> and
            making valuable contributions to{" "}
            <span className="highlight">product development</span>. With a{" "}
            <span className="highlight">coachable</span> spirit and an
            unrelenting drive for self-improvement, I actively seek feedback
            from seasoned engineers to fuel my{" "}
            <span className="highlight">personal growth</span>. Beyond this, I'm
            a committed Software Engineer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
