import { education } from "./../exports/variables";
import { motion } from "framer-motion";
import { resumeSectionVariant, textUpVariant } from "./../exports/animations";

const ResumeEdu: React.FC = () => {
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
          Education
        </motion.h4>
      </div>

      {education.map((edu, i) => {
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
            <h4 className="text-xs font-sans">{edu.endDate}</h4>
            <h4 className="text-xs font-sans font-black ">{edu.education}</h4>
            <h4 className="text-xs font-sans">- {edu.where}</h4>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ResumeEdu;
