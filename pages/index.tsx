import type { NextPage } from "next";

import Navigation from "../components/Navigation";
import Footer from "./../components/Footer";
import { motion } from "framer-motion";
import { textUpVariant } from "./../exports/animations";


const Home: NextPage = () => {
  return (
    <div className="flex justify-between flex-col h-screen w-screen px-6 pt-2 pb-5 md:p-10 3xl:p-16 overflow-hidden">


      <div>
        <div className="flex justify-end overflow-hidden mb-5">
          <motion.h1
            className="flex text-5xl md:text-8xl xl:text-9xl"
            variants={textUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={0.2}
          >
            JW.P
          </motion.h1>
        </div>

        <div className="flex flex-col justify-start sm:flex-row sm:justify-end">
          <div className="overflow-hidden">
            <motion.h1
              className="flex"
              variants={textUpVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.3}
            >
              Full&nbsp;
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="flex"
              variants={textUpVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.4}
            >
              Stack&nbsp;
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="flex"
              variants={textUpVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={0.5}
            >
              Dev.
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between align-bottom">
        <Navigation
          
        />
        <Footer />
      </div>
      
    </div>
    
  );
};

export default Home;
