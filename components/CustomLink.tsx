import { motion } from "framer-motion";
import { fadeUpTextVariant } from "../exports/animations";

const CustomLink: React.FC<{ url: string; download: boolean; text: string, noMargin?: boolean }> =
  ({ url, download, text, noMargin }) => {
    return (
      <motion.a
      className={`${!noMargin && 'ml-4'}`}
        href={url}
        target="_blank"
        variants={fadeUpTextVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={0.3}
        download={download}
      >
        <h3>{text}</h3>
      </motion.a>
    );
  };

export default CustomLink;
