import { textDownVariant } from "../exports/animations";
import { IAbout } from "../exports/interfaces";
import { motion, useAnimation } from "framer-motion";
import { workUpperLineVariant } from "./../exports/animations";

import AboutTabImg from "./AboutTabImg";
import { useEffect, useState } from "react";

const AboutTab: React.FC<IAbout> = ({
  text,
  section,
  imgsCrop,
  imgsReg,
  currFocus,
  setCurrFocus,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const upperLineControls = useAnimation();
  const contentControls = useAnimation();
  const sectionTextControls = useAnimation();

  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, [window.innerWidth]);
  }

  useEffect(() => {

    sectionTextControls.start('animate')
    if (currFocus === section) {
      upperLineControls.start("exit");
      contentControls.start("animate");
      sectionTextControls.start('slideToTheRight')
    } else {
      upperLineControls.start("animate");
      contentControls.start("exit");
      sectionTextControls.start('slideToTheLeft')
    }
  }, [currFocus]);

  const tabClicked = () => {
    setCurrFocus!(section);
  };

  return (
    <div
      className={`${!isMobile && "group"} overflow-hidden cursor-pointer`}
      onClick={() => tabClicked()}
    >
      <div className="flex flex-col relative pb-6 3xl:pb-14 h-min">
        <AboutTabImg
          url={imgsCrop.disp}
          blurUrl={imgsCrop.disp}
          currFocus={currFocus!}
          section={section!}
          text={text}
        />

        <motion.h2
          className={`group-hover:text-gray ${currFocus === section && 'font-bold'}`}
          variants={textDownVariant}
          initial="initial"
          animate={sectionTextControls}
          exit="exit"
          custom={0.3}
        >
          {section}
        </motion.h2>

        <motion.div
          className="h-px 3xl:h-1 w-full bg-white absolute top-0 group-hover:bg-gray"
          variants={workUpperLineVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={0.3}
        />
      </div>
    </div>
  );
};

export default AboutTab;
