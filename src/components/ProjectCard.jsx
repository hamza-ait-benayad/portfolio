import { div } from "framer-motion/client";
import { useState } from "react";
import { IconContext } from "react-icons";

const ProjectCard = ({ imgURL, label, subtext, languages }) => {
  const [isOnHover, setIsOnHover] = useState(null);

  const handleHoverOn = (id) => {
    setIsOnHover(id);
  };
  const handleHoverOff = () => {
    setIsOnHover(null);
  };

  return (
    <div className="bg-gray-900 rounded-2xl p-2 inset-shadow-sm  inset-shadow-gray-100/50">
      <div className="h-60 rounded-t-xl">
        <img
          src={imgURL}
          alt=""
          className="object-cover rounded-t-xl object-[25%_75%] w-full h-full "
        />
      </div>
      <div className="p-2">
        <h1 className="font-bold mb-5 text-2xl">{label}</h1>
        <hr className="bg-primary mb-2 opacity-30" />
        <div className="flex flex-col justify-between h-30">
        <p className="text-sm sm:text-base text-white/70">{subtext}</p>
        <div className="flex gap-2 ">
          {languages.map((language) => (
            <div key={language.id}>
              <IconContext.Provider
                value={{
                  color: "var(--color-primary-100)",
                  size: "40",
                  className: "border-1 border-red rounded-full p-2 ",
                }}
              >
                <div
                  className="flex flex-col-reverse  items-center gap-2 relative"
                  onMouseEnter={() => {
                    handleHoverOn(language.id);
                  }}
                  onMouseLeave={handleHoverOff}
                >
                  {language.icon}
                  <p
                    className={`absolute -top-8 whitespace-nowrap text-center bg-primary text-black px-2 rounded-md font-semibold ${
                      isOnHover === language.id ? "block" : "hidden"
                    }`}
                  >
                    {language.name}
                  </p>
                </div>
              </IconContext.Provider>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
