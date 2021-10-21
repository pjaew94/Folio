import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpTextVariant } from "../exports/animations";
import { useMediaQuery } from "react-responsive";

const JwpWorksLink = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <Link href="/work">
      <a>
        <div suppressHydrationWarning className="group flex fixed top-10 right-10 z-10 lg:top-24 2xl:right-48">
          <motion.h2
            className="font-sans text-2xl font-bold text-black 3xl:text-5xl"
            variants={fadeUpTextVariant}
            initial="initial"
            animate="animate"
            custom={0.2}
          >
            jwp.
          </motion.h2>
          {!isMobile && (
            <h2 className="hidden group-hover:flex font-sans text-2xl font-bold text-black 3xl:text-5xl">
              works
            </h2>
          )}
        </div>
      </a>
    </Link>
  );
};

export default JwpWorksLink;
