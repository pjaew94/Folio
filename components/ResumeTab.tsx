import { motion } from "framer-motion";
import { IResumeTab } from "../exports/interfaces";
import { textUpVariant } from "./../exports/animations";

const ResumeTab: React.FC<IResumeTab> = ({ currFocus, setCurrFocus, section }) => {
  const tabClicked = () => {
    setCurrFocus!(section);
  };

  return (
    <div className="overflow-hidden cursor-pointer">
      <motion.h3
        className={`text-base font-semibold text-gray mr-5 hover:text-black ${currFocus === section && '2xl:text-black'} 3xl:text-4xl 3xl:mr-10`}
        variants={textUpVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={0.4}
        onClick={() => tabClicked()}
      >
        {section}
      </motion.h3>
    </div>
  );
};

export default ResumeTab;
