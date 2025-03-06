import { motion } from "framer-motion";

export default function Project() {
  const variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div className="section">
      <motion.div className="w-5/6">
        <h1 className="section-title text-stroke">
          PROJECT
        </h1>
        <div className="w-full h-full grid grid-flow-col grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 gap-4 ">
          <motion.div
            variants={variants}
            className="bg-black rounded-2xl shadow-2xl shadow-gray-950"
          >
            <motion.div variants={variants} className="h-60 rounded-t-xl">
              <img
                src="/images/nike.png"
                alt=""
                className="object-contain rounded-t-xl object-[25%_75%] w-full h-full "
              />
            </motion.div>
            <motion.div variants={variants} className="p-2">
              <motion.h1
                variants={variants}
                className="font-bold mb-5 text-2xl"
              >
                Nike Clone
              </motion.h1>
              <p className="text-sm sm:text-base text-secondy">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dicta non sit culpa aliquid atque laboriosam alias eum
                deserunt corrupti. Ipsum, nam! Alias molestias minus quia neque
                ut at id?
              </p>
              <motion.div variants={variants} className="mt-5 flex gap-2">
                <motion.h1 className="bg-purple-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none text-secondy">
                  HTML
                </motion.h1>
                <motion.h1 className="bg-yellow-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  JavaScript
                </motion.h1>
                <motion.h1 className="bg-blue-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  React js
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="bg-black rounded-2xl shadow-2xl shadow-gray-950">
            <div className="bg-white h-60 rounded-t-xl"></div>
            <motion.div variants={variants} className="p-2">
              <motion.h1
                variants={variants}
                className="font-bold text-2xl mb-5"
              >
                project name
              </motion.h1>
              <p className="text-sm sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dicta non sit culpa aliquid atque laboriosam alias eum
                deserunt corrupti. Ipsum, nam! Alias molestias minus quia neque
                ut at id?
              </p>
              <motion.div variants={variants} className="mt-5 flex gap-2">
                <motion.h1 className="bg-purple-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  HTML
                </motion.h1>
                <motion.h1 className="bg-yellow-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  JavaScript
                </motion.h1>
                <motion.h1 className="bg-blue-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  CSS
                </motion.h1>
              </motion.div>
            </motion.div>
          </div>

          <div className="bg-black rounded-2xl shadow-2xl shadow-gray-950">
            <div className="bg-white h-60 rounded-t-xl"></div>
            <motion.div variants={variants} className="p-2">
              <motion.h1
                variants={variants}
                className="font-bold text-2xl mb-5"
              >
                project name
              </motion.h1>
              <p className="text-sm sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dicta non sit culpa aliquid atque laboriosam alias eum
                deserunt corrupti. Ipsum, nam! Alias molestias minus quia neque
                ut at id?
              </p>
              <motion.div variants={variants} className="mt-5 flex gap-2">
                <motion.h1 className="bg-purple-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  HTML
                </motion.h1>
                <motion.h1 className="bg-yellow-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  JavaScript
                </motion.h1>
                <motion.h1 className="bg-blue-600 rounded-full pl-2 pr-2 bg-opacity-50 cursor-pointer select-none">
                  CSS
                </motion.h1>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
