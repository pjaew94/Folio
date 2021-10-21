import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpTextVariant, linkUnderLineVariant } from "../exports/animations";
import { useAnimation } from "framer-motion";
import { ICustomLink } from "../exports/interfaces";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CustomRouteLink: React.FC<ICustomLink> = ({ route, text, index, toWork }) => {
  const linkUnderLineControls = useAnimation();
  const router = useRouter();
  const [currPath, setCurrPath] = useState<string>("");

  const [isMobile, setIsMobile] = useState(false);
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, [window.innerWidth]);
  }

  useEffect(() => {
    setTimeout(() => {
      setCurrPath(router.asPath);
    }, 500);
  }, []);

  const linkMouseEnter = async () => {
    if (!isMobile) {
      await linkUnderLineControls.set("initial");
      await linkUnderLineControls.start("animate");
    }
  };

  const linkMouseLeave = async () => {
    if (!isMobile) {
      await linkUnderLineControls.start("animateLeft");
      await linkUnderLineControls.set("initial");
    }
  };

  return (
    <div
      className={`flex overflow-hidden mt-1 xl:mt-2 3xl:mt-6 relative ${
        currPath === route && "hidden"
      }`}
    >
      <Link href={route}>
        <a>
          <motion.h3
            className='flex overflow-hidden'
            variants={fadeUpTextVariant}
            initial="initial"
            animate="animate"
            exit={!toWork ? 'exit' : undefined}
            whileTap="whileTap"
            onMouseEnter={() => linkMouseEnter()}
            onMouseLeave={() => linkMouseLeave()}
            custom={0.4 + index * 0.1}
          >
            {text}
            <motion.div
              className='absolute bottom-0 left-0 h-px w-full bg-black 3xl:h-1'
              variants={linkUnderLineVariant}
              initial="initial"
              animate={linkUnderLineControls}
            />
          </motion.h3>
        </a>
      </Link>
    </div>
  );
};

export default CustomRouteLink;
