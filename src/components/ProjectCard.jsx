const ProjectCard = () => {
  return (
    <div className="bg-black rounded-2xl p-2 inset-shadow-sm  inset-shadow-primary/60">
      <div className="h-60 rounded-t-xl">
        <img
          src="/images/nike.png"
          alt=""
          className="object-cover rounded-t-xl object-[25%_75%] w-full h-full "
        />
      </div>
      <div className="p-2">
        <h1 className="font-bold mb-5 text-2xl">Nike Clone</h1>
        <hr className="bg-primary mb-2 opacity-30" />
        <p className="text-sm sm:text-base text-white/70">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dicta non sit culpa aliquid atque laboriosam alias eum deserunt
          corrupti. Ipsum, nam! Alias molestias minus quia neque ut at id?
        </p>
        <div className="mt-5 flex gap-2">
          <h1 className="bg-purple-800/80 font-semibold rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none text-secondy">
            HTML
          </h1>
          <h1 className="bg-yellow-800/80 font-semibold rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none text-secondy">
            JavaScript
          </h1>
          <h1 className="bg-blue-800/80 font-semibold rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none text-secondy">
            React js
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
