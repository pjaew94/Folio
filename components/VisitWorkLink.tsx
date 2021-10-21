import { motion } from "framer-motion";
import { visitWorkLinkVariant } from "./../exports/animations";

const VisitWorkLink: React.FC<{ url: string; text: string }> = ({
  url,
  text,
}) => {
  return (
    <motion.a
      className="font-sans font-semibold text-xl  text-red w-min 3xl:text-3xl"
      href={url}
      target="_blank"
      rel="noreferrer"
      variants={visitWorkLinkVariant}
      whileHover="animate"
    >
      {text}
    </motion.a>
  );
};

export default VisitWorkLink;
