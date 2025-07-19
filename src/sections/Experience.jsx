import { experiences } from "../constants";

export default function Experience() {
  return (
    <div className="section">
      <div className="flex flex-col w-5/6">
        <h1 className="section-title text-stroke">EXPERIENCES</h1>
        <div className="flex">
          <div className="h-auto w-1 bg-primary rounded-full"></div>
          <div className="w-5 h-5 bg-primary rounded-full relative right-3 top-5"></div>
          <div className="w-5 h-5 bg-primary rounded-full relative right-8 top-52"></div>
          <div className="flex flex-col w-5/6 sm:w-3/6">
            {experiences.map((experience) => (
              <div key={"key"} className="mt-4">
                <h1 className="text-xl font-bold text-primary relative right-6">
                  {experience.year}
                </h1>
                <p className="text-text-primary font-bold mt-2">
                  {experience.start_date} - {experience.end_date}
                </p>
                <p className="text-secondary">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
