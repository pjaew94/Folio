import { motion, useAnimation } from "framer-motion";
import { IAbout } from "./../exports/interfaces";
import { useEffect } from "react";
import { aboutTabletDesktopImgVariant } from "../exports/animations";

const AboutTabletDesktopText: React.FC<{
  text: string;
  left: boolean;
  currFocus: IAbout["section"];
  section: IAbout["section"];
}> = ({ text, left, currFocus, section }) => {

  const textControls = useAnimation();

  useEffect(() => {
    if (currFocus === section) {
      textControls.start("animate");
    } else {
      textControls.start("disappear");
    }
  }, [currFocus]);


  return (
    <motion.p
      className={`flex items-center absolute top-0 ${
        left ? "left-0 justify-items-end md:pl-8" : "right-0 justify-items-start md:pr-8"
      } font-sans text-sm leading-6  md:w-aboutImgDim-md md:h-aboutImgDim-md xl:w-aboutImgDim xl:h-aboutImgDim xl:text-base 3xl:text-2xl-vw`}

      variants={aboutTabletDesktopImgVariant}
      initial='initial'
      animate={textControls}
      exit='exit'
    >{text}</motion.p>
  );
};

export default AboutTabletDesktopText;
