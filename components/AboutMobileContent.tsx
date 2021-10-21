import { about } from "./../exports/variables";
import AboutTab from "./AboutTab";
import { IAbout } from "./../exports/interfaces";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { textUpVariant } from "../exports/animations";
import { motion } from "framer-motion";
import {useState, useEffect} from 'react'

const AboutMobileContent: React.FC = () => {

  const [currFocus, setCurrFocus] = useState<
  IAbout['section']
>(null);

const [isMobile, setIsMobile] = useState(false);
if (typeof window !== "undefined") {
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.innerWidth]);
}

  return (
    <div className="flex flex-col justify-between min-h-screen w-screen x-6 pt-2 pb-5 px-6 bg-beige">
      <div className="flex flex-col w-full">
        <div className="overflow-hidden">
          <motion.h1
            className="flex text-black"
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

      <div className="flex flex-col w-full fixed bottom-0 left-0">
        {isMobile && <div className="w-full h-5 bg-gradient-to-t from-beige z-index-20" />}
        <div className="flex w-full justify-between px-6 pb-5 md:p-10 3xl:p-16 z-20 bg-beige">
          <Navigation />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutMobileContent;
