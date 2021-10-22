import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IResumeSection } from "../exports/interfaces";
import { workExperiences } from "../exports/variables";
import { resumeSectionVariant } from "./../exports/animations";

const ResumeWorkExp: React.FC<IResumeSection> = ({
  currFocus,
  section,
}) => {
  const textControl = useAnimation();

  useEffect(() => {
      if(currFocus === section) {
        textControl.start('animate')
      } else {
        textControl.start('disappear')
      }
  }, [currFocus])


  return (
    <div className="flex flex-col absolute pb-28 w-full md:pb-30percent 2xl:pb-10percent 3xl:pb-20percent">
      {workExperiences.map((exp, i) => {
        return <motion.div key={i} className="flex flex-col mb-10" variants={resumeSectionVariant} initial='initial' animate={textControl} exit='exit'>
          <motion.p className='leading-7 text-3xl font-light border-t border-gray border-opacity-20 3xl:text-5xl '>{exp.startDate}</motion.p>
          <motion.p className='leading-7 text-3xl font-light border-t border-gray border-opacity-20 3xl:text-5xl '>{exp.endDate}</motion.p>
          <motion.p className='leading-7 text-3xl font-light border-t border-gray border-opacity-20 3xl:text-5xl '>{exp.jobTitle}</motion.p>
          <motion.p className='leading-7 text-3xl font-light border-t border-b border-gray border-opacity-20 3xl:text-5xl '>{exp.company}</motion.p>

        </motion.div>;
      })}
    </div>
  );
};

export default ResumeWorkExp;
