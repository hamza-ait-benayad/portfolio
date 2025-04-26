import { experiances } from "../constants";

export default function Experiance() {
  return (
    <div className="section">
      <div className="flex flex-col w-5/6">
        <h1 className="section-title text-stroke">EXPRIANCES</h1>
        <div className="flex">
          <div className="h-auto w-1 bg-primary rounded-full"></div>
          <div className="w-5 h-5 bg-primary rounded-full relative right-3 top-5"></div>
          <div className="w-5 h-5 bg-primary rounded-full relative right-8 top-52"></div>
          <div className="flex flex-col w-5/6 sm:w-3/6">
            {experiances.map((experiance) => (
              <div key={"key"} className="mt-4">
                <h1 className="text-xl font-bold text-primary relative right-6">
                  {experiance.year}
                </h1>
                <p className="text-text-primary font-bold mt-2">
                  {experiance.start_date} - {experiance.end_date}
                </p>
                <p className="text-secondy">{experiance.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
