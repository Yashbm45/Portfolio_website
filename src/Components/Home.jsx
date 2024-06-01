import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  return (
    <div name="home" className="w-full  bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  ">
        <p className="text-[#53d6b8] ml-1 mt-1">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yashwant Mahamuni
        </h1>
        { <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2> }
        <p className="text-[#8892b0] py-4 max-w-[700px]">
            Welcome! I'm a passionate tech enthusiast on a mission to master 
            the real world of Software Development, Web Development and Data Analysis.
            My goal is to craft seamless and innovative digital experiences that leave a lasting impact. 
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]"> With a keen eye for detail and a relentless pursuit of excellence, 
          I'm dedicated to creating solutions that not only meet but exceed 
          expectations. From designing elegant user interfaces to architecting
          robust backend systems, 
          I thrive on tackling complex 
          challenges and turning them into opportunities for growth.
        </p>

        <p className="text-[#8892b0] py-4 max-w-[700px]" >In addition to my expertise in software and web development,
           I also have a strong interest in data analysis. Leveraging the power of data, 
           I enjoy uncovering insights that drive informed decisions and empower 
           businesses to thrive in today's data-driven world.
        </p> 
        <p className="text-[#8892b0] py-4 max-w-[700px]" >Whether it's coding a new feature, optimizing server 
            performance, or extracting valuable insights from data sets,
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]" > I'm always eager to dive into new projects and push 
              the boundaries of what's possible.
        </p>

          <p className="text-[hsl(68,80%,76%)] py-4 max-w-[700px]">Let's collaborate and bring your digital vision to life! <p />
          <span className="text-[hsl(68,80%,76%)] py-4 max-w-[700px]">
          Crafting Code, Analyzing Data, Transforming Ideas.
          </span>
        </p>
        <div className="mobileViewSocial flex items-center w-full mb-5">
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
            href="https://leetcode.com/yashwant45/"
          >
            <SiLeetcode size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home