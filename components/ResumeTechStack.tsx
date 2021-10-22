import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IResumeSection } from "../exports/interfaces";
import { resumeSectionVariant } from "./../exports/animations";
import { technologies, technologies2 } from './../exports/variables';

const ResumeTechStack: React.FC<IResumeSection> = ({ currFocus, section }) => {
  const textControl = useAnimation();

  useEffect(() => {
    if (currFocus === section) {
      textControl.start("animate");
    } else {
      textControl.start("disappear");
    }
  }, [currFocus]);

  return (
    <div className="flex absolute  pb-28 w-full ">
      <div className='flex flex-col w-1/2'>
      {technologies.map((tech, i) => {
        return (
          <motion.div
            key={i}
            className="flex flex-col"
            variants={resumeSectionVariant}
            initial="initial"
            animate={textControl}
            exit="exit"
          >
            <motion.p className="leading-7 text-3xl font-light mt-2 border-t border-gray border-opacity-20 3xl:text-5xl">
              {tech}
            </motion.p>
          </motion.div>
        );
      })}
      </div>
      <div className='flex flex-col w-1/2 '>
      {technologies2.map((tech, i) => {
        return (
          <motion.div
            key={i}
            className="flex flex-col"
            variants={resumeSectionVariant}
            initial="initial"
            animate={textControl}
            exit="exit"
          >
            <motion.p className="leading-7 text-3xl font-light mt-2 border-t border-gray border-opacity-20 3xl:text-5xl">
              {tech}
            </motion.p>
          </motion.div>
        );
      })}
      </div>
    </div>
  );
};

export default ResumeTechStack;
