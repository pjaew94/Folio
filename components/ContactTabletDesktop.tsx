import { motion } from "framer-motion";
import { textUpVariant } from "./../exports/animations";
import CustomLink from "./CustomLink";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { IContact } from "../exports/interfaces";

const ContactTabletDesktop: React.FC = ({}) => {
  return (
    <div className="flex flex-col w-full h-full relative items-center">
      <div className="flex justify-between items-end w-full">
        <div className="overflow-hidden">
          <motion.h1
            className="flex text-7xl md:text-8xl xl:text-9xl"
            variants={textUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={0.3}
          >
            Contact
          </motion.h1>
        </div>
        <CustomLink
          url="https://www.linkedin.com/in/jae-park-developer"
          download={false}
          text="LinkedIn"
          noMargin={true}
        />
      </div>

      <ContactForm />

      <div className="absolute left-0 bottom-0">
        <Navigation />
      </div>
      <div className="absolute right-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ContactTabletDesktop;
