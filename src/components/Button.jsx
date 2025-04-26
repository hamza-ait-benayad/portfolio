const Button = ({ href, label }) => {
  return (
    <div className="relative inline-block mb-10">
      <a
        href={href}
        download
        className="group relative inline-block px-6 py-3 text-[16px] font-bold uppercase text-[#0f1923] bg-transparent cursor-pointer transition-all duration-150 no-underline appearance-none focus:outline-none"
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-[calc(50%-5px)] border border-[#7D8082] border-b-0 transition-all duration-150 group-active:left-[3px] group-active:right-[3px] group-active:top-[3px]" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(50%-5px)] border border-[#7D8082] border-t-0 transition-all duration-150 group-active:left-[3px] group-active:right-[3px] group-active:bottom-[3px]" />
        <span className="relative block px-8 py-3 bg-[#0f1923] text-white overflow-hidden">
          <span className="absolute top-0 left-0 w-[3px] h-[2px] bg-[#0f1923]" />
          <span className="absolute bottom-0 right-0 w-[4px] h-[4px] bg-[#0f1923] transition-all duration-800 group-hover:bg-white" />
          <span className="absolute top-0 bottom-[-1px] left-[-8px] w-0 bg-primary skew-x-[-15deg] transition-all duration-800 group-hover:w-[calc(100%+15px)]" />
          <span className="relative">{label}</span>
        </span>
      </a>
    </div>
  );
};

export default Button;
