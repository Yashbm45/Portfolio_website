import React from "react";

function Projects() {
  const data = [
    {
      id: 1,
      name: "Crop Prediction System.",
      image: "https://i.ytimg.com/vi/okclK7AzCBQ/maxresdefault.jpg",
      github: "https://github.com/Yashbm45/Crop-Prediction-System",
      live: "https://malwaredetectionusingml.streamlit.app/",
      description:
        "This system predicts the best crop to grow based on various parameters like soil type, weather conditions, and more.",
    },
    {
      id: 2,
      name: "Blogify - Spring Boot Application.",
      image:
        "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=996&t=st=1717049137~exp=1717049737~hmac=e9573249c54b49a4d699e0222c76f6b61c008a6ec4028395ac5047a138f97425",
      github: "https://github.com/KunalBhat55/LiveWeatherApp",
      live: "https://liveweather-webapp.onrender.com/",
      description:
        "Blogify is a Spring Boot application for creating and managing blog posts with a user-friendly interface.",
    },
    {
      id: 3,
      name: "Wheater Application",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/weather-forecast%2C-forecast-design-template-1b116d584952c0173edd2550f3630243_screen.jpg?ts=1672114084", // Placeholder image
      github: "https://github.com/KunalBhat55/Currency-Exchange",
      live: "https://currency-exchange-seven-inky.vercel.app/",
      description:
        "Wheather appliction java servelt project which shows realtime wheather in differnt cities.",
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
