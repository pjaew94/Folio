import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { textUpVariant } from "../../exports/animations";
import { projectList } from "../../exports/variables";
import WorkTab from "../../components/WorkTab";
import { useState } from "react";

const Work: React.FC = () => {
  const [toWork, setToWork] = useState(false);

  return (
    <div className="flex flex-col justify-between h-screen w-screen px-6 pt-2 pb-5 md:p-10 3xl:p-16 overflow-hidden">
      <div className="flex flex-col w-full ">
        <div className="overflow-hidden">
          <motion.h1
            className="flex"
            variants={textUpVariant}
            initial="initial"
            animate="animate"
            exit={!toWork ? "exit" : undefined}
            custom={0.3}
          >
            Work
          </motion.h1>
        </div>

        <div className="flex flex-col w-full mt-10">
          {projectList.map((proj, index) => {
            return (
              <WorkTab
                key={index}
                abbreviation={proj.abbreviation}
                name={proj.name}
                type={proj.type}
                date={proj.date}
                toWork={toWork}
                setToWork={setToWork}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-between align-bottom">
        <Navigation toWork={toWork} />
        <Footer toWork={toWork} />
      </div>
    </div>
  );
};

export default Work;
