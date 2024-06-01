
import React from "react";

function Skills() {
    const frontend = [
      "HTML", "CSS", "JavaScript",
      "React", "Redux","TailwindCSS"
    ];
    const backendSkills = [
      "Node.js", "Express.js", "Spring Boot",
      "REST API", "MongoDB", "MySQL",
    ]

    const programmingSkills = ["Java", "C++", "Python"];

    const toolsSkills = ["Git GitHub", "GitHub Actions", "PowerBi","Tableau" ];
  return (
    <div id= "skills" name="skills" className="w-full  text-gray-300 bg-[#0a192f] md:mt-5  ">
      <div className="skillList max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold py-2 my-2 md:mt-4 border-[#53d6b8] border-b-4 w-fit">
          Skills
        </h2>
        <div className="mt-4 ">
          <h1 className="text-2xl font-semibold">Frontend</h1>
          <div className="Tech flex flex-wrap py-2 my-4 w-[80%] ">
            {frontend.map((skill, index) => (
              <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
              >
                {skill}
              </li>
            ))}
          </div>
          <h1 className="text-2xl font-semibold">Backend</h1>
          <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
            {" "}
            {backendSkills.map((skill, index) => (
              <li
                key={index}
                className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
              >
                {skill}
              </li>
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-semibold">Programming Languages</h1>
        <div className="flex py-2 my-4">
          {programmingSkills.map((skill, index) => (
            <li
              key={index}
              className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
              {skill}
            </li>
          ))}
        </div>

        <h1 className="text-2xl font-semibold">Tools</h1>
        <div className="Tech flex flex-wrap py-2 my-4 w-[80%]">
          {toolsSkills.map((skill, index) => (
            <li
              key={index}
              className="list-none p-2 border m-1 bg-slate-950 rounded-lg"
            >
              {skill}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills