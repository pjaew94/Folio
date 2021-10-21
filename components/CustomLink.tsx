import { motion } from "framer-motion";
import { fadeUpTextVariant } from "../exports/animations";

const CustomLink: React.FC<{ url: string; download: boolean; text: string }> =
  ({ url, download, text }) => {
    return (
      <motion.a
      className='ml-4 md:ml-0 font-sans font-semibold md:text-2xl 3xl:text-3xl-vw'
        href={url}
        target="_blank"
        variants={fadeUpTextVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={0.3}
      >
        {text}
      </motion.a>
    );
  };

export default CustomLink;
