import { useState } from "react";
import { IconContext } from "react-icons";

const MainProjectCard = ({ imgURL, label, subtext, languages, url, extendedDetails }) => {
  const [hoveredLang, setHoveredLang] = useState(null);
  const [activeImage, setActiveImage] = useState(imgURL);

  const galleryImages = extendedDetails?.images || [imgURL];

  return (
    <div className="rounded-2xl p-4 md:p-6 backdrop-blur-[64px] bg-primary/5 border-primary/30 border hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex flex-col xl:flex-row gap-6 xl:gap-10 w-full mb-12">
      {/* Left side: Image */}
      <div className="w-full xl:w-[55%] flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group">
            <img
              src={activeImage}
              alt={`${label} preview`}
              className="object-cover object-top w-full h-[300px] md:h-[400px] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-black rounded-sm font-bold shadow-lg hover:bg-white transition-colors duration-300"
                >
                  Visit Live Site →
                </a>
            </div>
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === img ? "border-primary shadow-md shadow-primary/30" : "border-white/10 opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Languages section below image */}
        <div className="mt-6 flex justify-between items-center bg-black/20 p-4 rounded-xl border border-white/5">
            <div className="flex gap-4">
              {languages.map((language) => (
                <div key={language.id} className="relative group">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-primary)",
                      size: "32",
                      className: "opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200",
                    }}
                  >
                    <div
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredLang(language.id)}
                      onMouseLeave={() => setHoveredLang(null)}
                    >
                      <span aria-label={language.name}>{language.icon}</span>
                      <p
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-black px-3 py-1 rounded-md font-bold text-xs transition-all duration-200 z-50 ${
                          hoveredLang === language.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
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
              className="px-5 py-2 text-primary border border-primary/50 rounded-sm text-sm font-bold hover:bg-primary hover:text-black transition-all duration-300 xl:hidden"
            >
              View Project
            </a>
        </div>
      </div>

      {/* Right side: Content Details */}
      <div className="w-full xl:w-[45%] flex flex-col justify-center">
        <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded-full w-max mb-4">
          Featured Project
        </div>
        <h2 className="font-extrabold mb-4 text-3xl md:text-4xl text-white tracking-tight">{label}</h2>
        <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
          {extendedDetails?.overview || subtext}
        </p>

        {extendedDetails && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extendedDetails.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-primary mt-0.5">▹</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {extendedDetails.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-white/80 font-medium tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainProjectCard;
