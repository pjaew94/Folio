import { NextComponentType } from "next";
import { motion } from "framer-motion";
import { textUpVariant } from './../exports/animations';

const Footer: React.FC<{toWork?: boolean}> = ({toWork}) => {
  return (
    <div className="flex flex-col justify-end items-end">
      <div className="overflow-hidden">
        <motion.h4
          className=""
          variants={textUpVariant}
          initial="initial"
          animate="animate"
          exit={!toWork ? 'exit' : undefined}
          custom={0.4}
        >
          JAE PARK
        </motion.h4>
      </div>
      <div className="overflow-hidden">
        <motion.h4
          className=""
          variants={textUpVariant}
          initial="initial"
          animate="animate"
          exit={!toWork ? 'exit' : undefined}
          custom={0.5}
        >
          2021 PORTFOLIO
        </motion.h4>
      </div>
    </div>
  );
};

export default Footer;
