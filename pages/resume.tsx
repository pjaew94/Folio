import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { textUpVariant } from "../exports/animations";
import CustomLink from "../components/CustomLink";
import ResumeWorkExp from "../components/ResumeWorkExp";
import ResumeTechStack from "../components/ResumeTechStack";
import ResumeEdu from "./../components/ResumeEdu";
import ResumeLanguages from "../components/ResumeLanguages";
import { useEffect, useState } from "react";
import ScrollProgressBar from './../components/ScrollProgressBar';

const Resume: React.FC = () => {
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
    <div className="flex flex-col justify-between min-h-screen w-screen px-6 pt-2 pb-48 md:p-10 3xl:p-16">
      {isMobile && <ScrollProgressBar black={true} />}
      <div className="flex flex-col w-full items-end  md:flex-row-reverse md:items-start md:justify-between ">
        <div className="overflow-hidden">
          <motion.h1
            className="flex text-7xl md:text-8xl xl:text-9xl"
            variants={textUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={0.3}
          >
            Resume
          </motion.h1>
        </div>

        <div className="flex justify-end w-full md:w-min md:flex-col md:mt-4">
          <CustomLink url="123" download={true} text="Download" />
          <CustomLink url="123" download={true} text="Github" />
        </div>
      </div>

      <div className="flex flex-col justify-self-start mt-5">
        <div className="flex justify-between w-full">
          <ResumeWorkExp />
          <ResumeEdu />
        </div>
        <div className="flex justify-between w-full">
          <ResumeTechStack />
          <ResumeLanguages />
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

export default Resume;
