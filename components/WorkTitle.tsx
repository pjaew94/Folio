import { fadeUpTextVariant, textUpVariant } from "../exports/animations";
import { motion } from "framer-motion";

const WorkTitle: React.FC<{ title: string[]; subString: string }> = ({
  title,
  subString,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:mb-2 2xl:mb-6">
        {title.map((title, i) => {
          return (
            <div className="overflow-hidden" key={i}>
              <motion.h1
                className="text-6xl text-black mb-3 pr-10 md:pr-5 lg:text-7xl 2xl:text-8xl-vw"
                variants={textUpVariant}
                initial="initial"
                animate="animate"
                custom={0.2}
              >
                {title}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <motion.p
        className="text-gray pr-16 lg:text-xl 3xl:text-3xl"
        variants={fadeUpTextVariant}
        initial="initial"
        animate="animate"
        custom={0.2}
      >
        {subString}
      </motion.p>
    </div>
  );
};

export default WorkTitle;
