import { motion } from "framer-motion";
import { textUpVariant } from "../exports/animations";
import CustomLink from "./CustomLink";
import ContactForm from "./ContactForm";
import NavAndFooterMobile from "./NavAndFooterMobile";
import { IContact } from "../exports/interfaces";

const ContactMobile: React.FunctionComponent = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end md:w-full">
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

    
      <ContactForm
     
        
        />
 

      <NavAndFooterMobile />
    </div>
  );
};

export default ContactMobile;
