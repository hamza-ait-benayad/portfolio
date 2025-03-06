export default function Experiance() {
  return (
    <div className="section">
      <div className="flex flex-col w-5/6">
        <h1 className="section-title text-stroke">
          EXPRIANCES
        </h1>
        <div className="flex">
          <div className="h-auto w-1 bg-primary rounded-full"></div>
          <div className="w-5 h-5 bg-primary rounded-full relative right-3 top-1"></div>
          <div className="w-5 h-5 bg-primary rounded-full relative right-8 top-36"></div>
          <div className="flex flex-col w-5/6 sm:w-3/6">
            <div>
              <h1 className="text-xl font-bold text-primary relative right-6 ">
                2 0 2 3
              </h1>
              <p className="text-text-primary font-bold">01 July - 01 Aug</p>
              <p className="text-secondy">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus deleniti minima iusto eveniet! Deserunt ipsam
                doloremque suscipit, laboriosam, facere error odio ratione
                itaque ab officiis recusandae illo soluta expedita alias.
              </p>
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-bold text-text-primary relative right-6">
                2 0 2 4
              </h1>
              <p className="text-text-primary font-bold">15 June - 01 July</p>
              <p className="text-secondy">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus deleniti minima iusto eveniet! Deserunt ipsam
                doloremque suscipit, laboriosam, facere error odio ratione
                itaque ab officiis recusandae illo soluta expedita alias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
