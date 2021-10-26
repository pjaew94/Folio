import { motion, useAnimation } from "framer-motion";
import {
  formSubmitButtonVariant,
  formSubmitButtonArrowVariant,
} from "../exports/animations";

import { useEffect } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

const FormSubmitButton: React.FC<{
  isLoading: boolean;
}> = ({ isLoading }) => {
  const buttonControls = useAnimation();
  const arrowControls = useAnimation();

  useEffect(() => {
    buttonControls.start("animate");
  }, []);

  const hovered = () => {
    arrowControls.start("hovered");
  };

  const unHovered = () => {
    arrowControls.start("unHovered");
  };

  return (
    <motion.button
      type="submit"
      value="Submit"
      className="flex mt-5 mr-2 bg-beige items-center w-min disabled:opacity-20"
      variants={formSubmitButtonVariant}
      initial="initial"
      animate={buttonControls}
      exit="exit"
      whileTap="pressed"
      onMouseEnter={() => hovered()}
      onMouseLeave={() => unHovered()}
      disabled={isLoading ? true : false}
    >
      <span className="text-2xl mr-2 3xl:text-5xl 3xl:mr-11">Submit</span>
      <motion.div
        className="relative flex items-center w-6 origin-left 3xl:w-14"
        variants={formSubmitButtonArrowVariant}
        animate={arrowControls}
      >
        <span className="h-px w-2 bg-black absolute right-0 origin-right rotate-45 3xl:w-4" />
        <span className="h-px w-full bg-black" />
        <span className="h-px w-2 bg-black absolute right-0 origin-right -rotate-45 3xl:w-4" />
      </motion.div>
    </motion.button>
  );
};

export default FormSubmitButton;
