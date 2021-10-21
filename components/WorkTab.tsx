import { IProjectInfo, IWorkTab } from "./../exports/interfaces";
import { motion } from "framer-motion";
import { workUpperLineVariant, textDownVariant } from "./../exports/animations";
import { useRouter } from "next/router";
import {useState, useEffect} from 'react'

const WorkTab: React.FC<IWorkTab> = ({
  abbreviation,
  name,
  date,
  type,
  toWork,
  setToWork
}) => {

  const [isMobile, setIsMobile] = useState(false);
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, [window.innerWidth]);
  }

  const router = useRouter();

  const workTabClick = () => {
    setToWork!(true);

    router.push(`/work/${abbreviation}`)
  };

  return (
    <div
      className={`${!isMobile && "group"} overflow-hidden cursor-pointer`}
      onClick={() => workTabClick()}
    >
      <div className="flex justify-between relative pb-6 3xl:pb-14">
        <motion.h2
          className="group-hover:text-gray"
          variants={textDownVariant}
          initial="initial"
          animate="animate"
          exit={!toWork ? 'exit' : undefined}
          custom={0.3}
        >
          {name}
        </motion.h2>
        <div className="flex justify-end xl:mr-72 3xl:mr-96">
          <h2 className="hidden group-hover:flex text-gray mr-72 3xl:mr-96">
            {type}
          </h2>
          <motion.h2
            className="group-hover:text-gray"
            variants={textDownVariant}
            initial="initial"
            animate="animate"
            exit={!toWork ? 'exit' : undefined}
            custom={0.3}
          >
            {date}
          </motion.h2>
        </div>
        <motion.div
          className="h-px 3xl:h-1 w-full bg-black absolute top-0 group-hover:bg-gray"
          variants={workUpperLineVariant}
          initial="initial"
          animate="animate"
          exit={!toWork ? 'exit' : undefined}
          custom={0.3}
        />
      </div>
    </div>
  );
};

export default WorkTab;
