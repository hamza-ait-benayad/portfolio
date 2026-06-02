import { useState } from "react";
import { IconContext } from "react-icons";

const ProjectCard = ({ imgURL, label, subtext, languages, url }) => {
  const [hoveredLang, setHoveredLang] = useState(null);

  return (
    <div className="rounded-2xl p-2 backdrop-blur-[64px] bg-transparent border-primary/20 border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="h-60 rounded-t-xl overflow-hidden">
        <img
          src={imgURL}
          alt={`${label} project screenshot`}
          className="object-cover rounded-t-xl object-[25%_75%] w-full h-full transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold mb-5 text-2xl text-secondary">{label}</h2>
        <hr className="bg-primary mb-2 opacity-30" />
        <div className="flex flex-col justify-between h-35">
          <p className="text-sm sm:text-base text-white/70">{subtext}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {languages.map((language) => (
                <div key={language.id} className="relative">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-primary)",
                      size: "40",
                      className:
                        "border border-primary/50 rounded-full p-2 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-200",
                    }}
                  >
                    <div
                      className="flex flex-col-reverse items-center gap-2 cursor-pointer"
                      onMouseEnter={() => setHoveredLang(language.id)}
                      onMouseLeave={() => setHoveredLang(null)}
                    >
                      <span aria-label={language.name}>{language.icon}</span>
                      <p
                        className={`absolute -top-8 whitespace-nowrap text-center bg-primary text-black px-2 rounded-md font-semibold text-xs transition-opacity duration-200 ${
                          hoveredLang === language.id
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        {language.name}
                      </p>
                    </div>
                  </IconContext.Provider>
                </div>
              ))}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 text-primary border border-primary/50 rounded-sm text-sm font-semibold hover:bg-primary hover:text-black transition-all duration-200"
            >
              View →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
