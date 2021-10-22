import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IResumeSection } from "../exports/interfaces";
import { resumeSectionVariant } from "./../exports/animations";
import { education } from './../exports/variables';

const ResumeEdu: React.FC<IResumeSection> = ({ currFocus, section }) => {
  const textControl = useAnimation();

  useEffect(() => {
    if (currFocus === section) {
      textControl.start("animate");
    } else {
      textControl.start("disappear");
    }
  }, [currFocus]);

  return (
    <div className="flex flex-col absolute  pb-28 w-full 2xl:pb-10percent">
      {education.map((edu, i) => {
        return (
          <motion.div
            key={i}
            className="flex flex-col mb-10"
            variants={resumeSectionVariant}
            initial="initial"
            animate={textControl}
            exit="exit"
          >
            <motion.p className="leading-7 text-3xl font-light border-t border-gray border-opacity-20 3xl:text-5xl">
              {edu.education}
            </motion.p>
            <motion.p className="leading-7 text-3xl font-light border-t border-gray border-opacity-20 3xl:text-5xl">
              {edu.where}
            </motion.p>
            <motion.p className="leading-7 text-3xl font-light border-t border-b border-gray border-opacity-20 3xl:text-5xl">
              {edu.endDate}
            </motion.p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ResumeEdu;
