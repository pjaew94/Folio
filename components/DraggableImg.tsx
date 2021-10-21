import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { workImage1Variant } from "../exports/animations";

const DraggableImg: React.FC<{ disp: string; blur: string }> = ({
  disp,
  blur,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024})

  let draggableLeft = isMobile ? -560 : isTablet ? -200 : 0;

  return (
    <motion.div
      className="block my-40 w-min"
      variants={workImage1Variant}
      initial="initial"
      animate="animate"
    >
      <motion.div drag={isMobile || isTablet ? "x" : undefined} dragElastic={0.1} dragConstraints={{left: draggableLeft, right: 0}}>
        <Image
          src={disp}
          alt=""
          width={900}
          height={600}
          layout="fixed"
          priority={true}
          placeholder="blur"
          blurDataURL={blur}
        />
      </motion.div>
    </motion.div>
  );
};

export default DraggableImg;
