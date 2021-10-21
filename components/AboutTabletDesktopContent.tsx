import Navigation from "./Navigation";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { fadeUpTextVariant, textUpVariant } from "../exports/animations";
import { useState } from "react";
import { about } from "./../exports/variables";
import AboutTabletDesktopImg from "./AboutTabletDesktopImg";
import { IAbout } from "./../exports/interfaces";
import AboutTabletDesktopText from "./AboutTabletDesktopText";

const AboutTabletDesktopContent: React.FC = () => {
  const [currFocus, setCurrFocus] = useState<IAbout["section"]>(null);

  const sectionClicked = (section: IAbout["section"]) => {
    if (section === currFocus) {
      setCurrFocus!(null);
    } else {
      setCurrFocus!(section);
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen w-screen px-6 pt-2 pb-5 md:p-10 3xl:p-16 overflow-hidden bg-beige">
      <div className="overflow-hidden flex w-min self-end">
        <motion.h1
          className="flex w-min text-black"
          variants={textUpVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={0.3}
        >
          About
        </motion.h1>
      </div>

      <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center">
        <div className="flex relative justify-center  md:h-aboutImgDim-md items-center md:w-full xl:h-aboutImgDim xl:w-2/3">
          <AboutTabletDesktopImg
            url={about[0].imgsCrop.disp}
            urlBlur={about[0].imgsCrop.blur}
            left={true}
            currFocus={currFocus}
            section={about[0].section}
          />
          <AboutTabletDesktopImg
            url={about[1].imgsCrop.disp}
            urlBlur={about[1].imgsCrop.blur}
            left={false}
            currFocus={currFocus}
            section={about[1].section}
          />
          <AboutTabletDesktopImg
            url={about[2].imgsCrop.disp}
            urlBlur={about[2].imgsCrop.blur}
            left={true}
            currFocus={currFocus}
            section={about[2].section}
          />
          <AboutTabletDesktopImg
            url={about[3].imgsCrop.disp}
            urlBlur={about[3].imgsCrop.blur}
            left={false}
            currFocus={currFocus}
            section={about[3].section}
          />

          <AboutTabletDesktopText
            text={about[0].text}
            left={false}
            currFocus={currFocus}
            section={about[0].section}
          />
          <AboutTabletDesktopText
            text={about[1].text}
            left={true}
            currFocus={currFocus}
            section={about[1].section}
          />
          <AboutTabletDesktopText
            text={about[2].text}
            left={false}
            currFocus={currFocus}
            section={about[2].section}
          />
          <AboutTabletDesktopText
            text={about[3].text}
            left={true}
            currFocus={currFocus}
            section={about[3].section}
          />
          <div className="flex flex-col">
            {about.map((about, i) => {
              return (
                <motion.h3
                  key={i}
                  className={`mb-3 text-xl font-sans cursor-pointer text-gray hover:text-black ${currFocus === about.section && 'md:text-black'} 3xl:text-3xl-vw`}
                  variants={fadeUpTextVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={0.3 + i * 0.1}
                  onClick={() => sectionClicked(about.section)}
                >
                  {about.section}
                </motion.h3>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-between align-bottom">
        <Navigation />
        <Footer />
      </div>
    </div>
  );
};

export default AboutTabletDesktopContent;
