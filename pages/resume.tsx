import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { textUpVariant } from "../exports/animations";
import CustomLink from "../components/CustomLink";
import ResumeWorkExp from "../components/ResumeWorkExp";
import ResumeTechStack from "../components/ResumeTechStack";
import ResumeEdu from "./../components/ResumeEdu";
import { useEffect, useState} from "react";
import ScrollProgressBar from "./../components/ScrollProgressBar";
import ResumeTab from "../components/ResumeTab";
import { IResumeTab } from "../exports/interfaces";

const Resume: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currFocus, setCurrFocus] = useState<IResumeTab["currFocus"]>(null);

  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, [window.innerWidth]);
  }

  return (
    <div className="flex flex-col relative min-h-screen w-screen px-6 pt-2 pb-48 md:p-10  md:pb-72  2xl:items-center 2xl:p-10 3xl:p-16">
      {isMobile && <ScrollProgressBar black={true} />}
      <div className="flex flex-col w-full  md:flex-row-reverse md:items-start md:justify-between">
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
          <CustomLink url="https://github.com/pjaew94" download={false} text="Download" />
          <CustomLink
            url="https://github.com/pjaew94"
            download={false}
            text="Github"
          />
        </div>
      </div>

      <div className="w-full flex flex-col mt-5">
        <div className="flex">
          <ResumeTab
            currFocus={currFocus}
            setCurrFocus={setCurrFocus}
            section="Work"
          />
          <ResumeTab
            currFocus={currFocus}
            setCurrFocus={setCurrFocus}
            section="Edu."
          />
          <ResumeTab
            currFocus={currFocus}
            setCurrFocus={setCurrFocus}
            section="Tech."
          />
        </div>

        <div className="flex mt-5 relative w-full">
          <ResumeWorkExp currFocus={currFocus} section="Work" />
          <ResumeEdu currFocus={currFocus} section="Edu." />
          <ResumeTechStack currFocus={currFocus} section="Tech." />
        </div>
      </div>

      <div className="flex flex-col w-full fixed bottom-0 left-0">
        {isMobile && (
          <div className="w-full h-5 bg-gradient-to-t from-beige z-index-20" />
        )}
        <div
          className={`flex w-full justify-between px-6 pb-5 md:p-10 3xl:p-16 z-20 ${
            isMobile && "bg-beige"
          }`}
        >
          <Navigation />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Resume;
