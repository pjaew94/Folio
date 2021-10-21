import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { textUpVariant } from "../exports/animations";

const Resume: React.FC = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-screen px-6 pt-2 pb-5'>
        <div className='flex flex-col w-full'>
        <div className="overflow-hidden">
          <motion.h1
            className="flex"
            variants={textUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={0.3}
          >
            Resume
          </motion.h1>
        </div>
        </div>


      <div className="flex justify-between align-bottom">
        <Navigation />
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
