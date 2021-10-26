import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  contactFormVariant,
  successReturnButtonVariant,
} from "../../exports/animations";
import Link from "next/link";

const Success: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex w-screen h-screen p-4 relative md:justify-center md:items-center">
      <motion.div
        className="flex flex-col w-full mt-1/2 md:w-8/12 md:items-center md:mt-0 2xl:w-5/12"
        variants={contactFormVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className="text-6xl font-medium md:text-center md:text-7xl 2xl:text-8xl-vw">Thanks for reaching out!</h1>

        <p className="flex mt-5 w-11/12 md:text-center md:mt-8 2xl:text-2xl-vw 2xl:w-9/12 3xl:mt-14">
          I&apos;ve sent you a confirmation email. I will contact you as soon as
          possible! Looking forward to getting in touch with you!{" "}
        </p>
      </motion.div>

      {/* Return Button */}
      <motion.div
        className="flex absolute top-4 left-4 cursor-pointer md:top-8 md:left-8 3xl:top-20 3xl:left-20"
        variants={successReturnButtonVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <button
          onClick={() => router.replace("/")}
          className="flex font-sans font-medium text-xl md:text-2xl 3xl:text-5xl group"
        >
          <span>return</span>
          <span className='hidden 2xl:group-hover:flex'>.home</span>
        </button>
        
      </motion.div>
    </div>
  );
};

export default Success;
