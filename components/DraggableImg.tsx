import { motion } from "framer-motion";
import Image from "next/image";
import { workImage1Variant } from "../exports/animations";
import {useState, useEffect} from 'react'

const DraggableImg: React.FC<{ disp: string; blur: string }> = ({
  disp,
  blur,
}) => {

  const [isWhat, setIsWhat] = useState<'isMobile' | 'isTablet' | null>(null);
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 768) {
        setIsWhat('isMobile');
      } else if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setIsWhat('isTablet');
      } else {
        setIsWhat(null)
      }
    }, [window.innerWidth]);
  }

  let draggableLeft = isWhat === 'isMobile' ? -560 : isWhat === 'isTablet' ? -200 : 0;

  return (
    <motion.div
      className="block my-40 w-min"
      variants={workImage1Variant}
      initial="initial"
      animate="animate"
    >
      <motion.div drag={isWhat ? "x" : undefined} dragElastic={0.1} dragConstraints={{left: draggableLeft, right: 0}}>
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
