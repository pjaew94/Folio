import { motion } from "framer-motion";
import Image from "next/image";
import { workImage1Variant } from "../exports/animations";

const NonDraggableImg: React.FC<{ disp: string; blur: string }> = ({
  disp,
  blur,
}) => {
  return (
    <motion.div
      className="my-40 relative w-screen pr-28 lg:my-72 2xl:my-80 3xl:my-3xl overflow-x-hidden"
      variants={workImage1Variant}
      initial="initial"
      animate="animate"
    >
      <Image
        className="object-contain"
        src={disp}
        alt=""
        height={1440}
        width={2160}
        layout="responsive"
        placeholder="blur"
        blurDataURL={blur}
      />
    </motion.div>
  );
};

export default NonDraggableImg;
