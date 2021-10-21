import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { aboutTabImgVariant } from "../exports/animations";
import { useRef, useEffect } from "react";

const AboutTabImg: React.FC<{
  text: string;
  url: string;
  blurUrl: string;
  currFocus: string;
  section: string;
}> = ({ url, blurUrl, currFocus, section, text }) => {
  const ref = useRef<HTMLDivElement>(null);
  const imgControls = useAnimation();
  useEffect(() => {
    if (currFocus === section) {
      imgControls.start("animate");
    } else {
      imgControls.start("minimize");
    }
  }, [currFocus]);

  return (
    <motion.div
      className=""
      variants={aboutTabImgVariant}
      initial="initial"
      animate={imgControls}
      custom={ref.current?.clientHeight}
    >
      <div ref={ref} className="">
        <motion.p className="flex py-4 relative text-sm font-sans font-semibold pl-30percent text-black">
          {text}
        </motion.p>
        <Image
          className="object-contain w-full "
          src={url}
          alt=""
          height={150}
          width={150}
          layout="responsive"
          placeholder="blur"
          blurDataURL={blurUrl}
        />
      </div>
    </motion.div>
  );
};

export default AboutTabImg;
