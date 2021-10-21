import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { aboutTabletDesktopImgVariant } from "../exports/animations";
import { IAbout } from './../exports/interfaces';

const AboutTabletDesktopImg: React.FC<{
  url: string;
  urlBlur: string;
  left: boolean;
  currFocus: IAbout['section'];
  section: IAbout['section'];
}> = ({ url, urlBlur, left, currFocus, section }) => {
  const imgControls = useAnimation();

  useEffect(() => {
    if (currFocus === section) {
      imgControls.start("animate");
    } else {
      imgControls.start("disappear");
    }
  }, [currFocus]);

  return (
    <motion.div
      className={`absolute top-0 ${
        left ? "left-0 md:ml-6" : "right-0 md:mr-6"
      } md:w-aboutImgDim-md md:h-aboutImgDim-md xl:w-aboutImgDim xl:h-aboutImgDim`}
      variants={aboutTabletDesktopImgVariant}
      animate={imgControls}
      initial='initial'
      exit='exit'
    >
      <Image
        className="object-contain w-full "
        src={url}
        alt=""
        height={150}
        width={150}
        layout="responsive"
        placeholder="blur"
        blurDataURL={urlBlur}
      />
    </motion.div>
  );
};

export default AboutTabletDesktopImg;
