import { motion } from "framer-motion";
import { workExperiences } from "../exports/variables";
import { resumeSectionVariant, textUpVariant } from "./../exports/animations";

const ResumeWorkExp: React.FC = () => {
  return (
    <div className="flex flex-col w-5/12">
      <div className="overflow-hidden">
        <motion.h4
          className="font-semibold text-xl"
          variants={textUpVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={0.3}
        >
          Work
        </motion.h4>
      </div>

      {workExperiences.map((exp, i) => {
        return (
          <motion.div
            key={i}
            className="flex flex-col font-semibold mb-4"
            variants={resumeSectionVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={0.4 + i * 0.1}
          >
            <h4 className="text-xs font-sans">{exp.startDate}</h4>
            <h4 className="text-xs font-sans">- {exp.endDate}</h4>
            <h4 className="text-xs font-sans font-black ">{exp.jobTitle}</h4>
            <h4 className="text-xs font-sans">{exp.company}</h4>
            <h4 className="text-xs font-sans">{exp.companyLocation}</h4>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ResumeWorkExp;
