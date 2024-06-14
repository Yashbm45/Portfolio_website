import React from "react";

function Projects() {
  const data = [
    {
      id: 1,
      name: "Crop Prediction System.",
      image: "https://i.ytimg.com/vi/okclK7AzCBQ/maxresdefault.jpg",
      github: "https://github.com/Yashbm45/Crop-Prediction-System",
      live: "https://github.com/Yashbm45/Crop-Prediction-System",
      description:
        "This system predicts the best crop to grow based on various parameters like soil type, weather conditions, and more.",
    },
    {
      id: 2,
      name: "YouTube Backend- JavaScript",
      image:
        "https://www.freepik.com/free-vector/youtube-player-icon-with-flat-design_2448079.htm#fromView=search&page=1&position=0&uuid=01be4547-0ce0-4e75-99c5-629c9b463a0e",
      github: "https://github.com/Yashbm45/You_Tube_Backend",
      live: "https://github.com/Yashbm45/You_Tube_Backend",
      description:
        "YouTube Backend is build using Node JS, Express JS and MongoDB. In this project JWT, Multer, Clouldinary, Bycript these services are utilised..",
    },
    {
      id: 3,
      name: "Background Colour Changer - React JS ",
      image: "https://www.freepik.com/premium-vector/ui-ux-agency-icon_168546885.htm#query=react%20logo&position=6&from_view=keyword&track=ais_user&uuid=21a8689d-daa7-4ed0-b3b7-59895976fbfc", // Placeholder image
      github: "https://github.com/Yashbm45/Background_Color_Changer",
      live: "https://github.com/Yashbm45/Background_Color_Changer",
      description:
        "Background colour changer application is build using React JS and tailwind CSS.",
    },
  ];
  const project = data;

  return (
    <div id  = "projects" name="projects" className="w-full text-gray-300  bg-[#0a192f] md:mt-4">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#53d6b8] ">
            Projects
          </p>
          <p className="py-9 text-xl">Check out some of my work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ border: "1px solid #53d6b8" }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              <div
                className="bg-cover bg-center h-full w-full"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 px-2 transition-opacity duration-450 bg-black bg-opacity-75 h-full w-full flex flex-col justify-center items-center">
                  <span className="text-2xl font bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <p className="mt-4">{item.description}</p>
                  <div className="mt-4">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-4
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        GitHub
                      </button>
                    </a>
                    <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="explore border-2 text-[#53d6b8] border-[#53d6b8] font-medium text-lg px-4 py-2 my-12 mx-auto flex items-center transition-all rounded-md">
          <a href="https://github.com/yashbm45/" rel="noreferrer" target="_blank">
            Explore More!
          </a>
        </button>
      </div>
    </div>
  );
}

export default Projects;
