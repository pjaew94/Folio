import { about } from "./../exports/variables";
import AboutTab from "./AboutTab";
import { IAbout } from "./../exports/interfaces";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { textUpVariant } from "../exports/animations";
import { motion } from "framer-motion";
import {useState} from 'react'

const AboutMobileContent: React.FC = () => {

  const [currFocus, setCurrFocus] = useState<
  IAbout['section']
>(null);

  return (
    <div className="flex flex-col justify-between h-screen w-screen x-6 pt-2 pb-5 px-6">
      <div className="flex flex-col w-full">
        <div className="overflow-hidden">
          <motion.h1
            className="flex"
            variants={textUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={0.3}
          >
            About
          </motion.h1>
        </div>

        <div className="flex flex-col w-full mt-10 pb-36">
          {about.map((sec, i) => {
            return (
              <AboutTab
                key={i}
                section={sec.section}
                text={sec.text}
                imgsCrop={sec.imgsCrop}
                imgsReg={sec.imgsReg}
                currFocus={currFocus}
                setCurrFocus={setCurrFocus}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-between align-bottom fixed bottom-0 left-0 pb-5 px-6 w-min z-10">
        <Navigation />
      </div>
      <div className="flex justify-between align-bottom fixed bottom-0 right-0 pb-5 px-6 z-10">
        <Footer />
      </div>
    </div>
  );
};

export default AboutMobileContent;
