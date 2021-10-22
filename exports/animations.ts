export const textUpVariant = {
  initial: {
    y: "110%",
  },
  animate: (custom?: number) => ({
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,
      delay: custom,
    },
  }),
  exit: {
    y: "100%",
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const textDownVariant = {
  initial: {
    y: "-100%",
  },
  animate: (custom?: number) => ({
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,
      delay: custom,
    },
  }),
  exit: {
    y: "-100%",
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
  slideToTheRight: {
    x: "43%",
    y: 15,
    scale: 1.2,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,
    },
  },
  slideToTheLeft: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,
    },
  },
};

export const fadeUpTextVariant = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (custom?: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,

      delay: custom,
    },
  }),
  whileTap: {
    scale: 0.9,
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const linkUnderLineVariant = {
  initial: {
    x: "-110%",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0,
    },
  },
  animateLeft: {
    x: "110%",
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0,
    },
  },

  exit: {
    x: "-110%",
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const workUpperLineVariant = {
  initial: {
    opacity: 0,
  },
  animate: (custom?: number) => ({
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0,
      delay: custom,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const workImage1Variant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0,
    },
  },
};

export const visitWorkLinkVariant = {
  animate: {
    x: 30,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
      mass: 0.5,
    },
  },
};

export const aboutTabImgVariant = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: (custom: number) => ({
    height: custom,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  }),
  minimize: {
    height: 0,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const aboutTabContentVariant = {
  animate: {
    y: 10,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
  exit: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const aboutTabletDesktopImgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      type: "easeIn",
      duration: 0.5,
      bounce: 0,
    },
  },
  disappear: {
    opacity: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      type: "easeIn",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export const resumeSectionVariant = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
      delay: custom
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
  disappear: {
    opacity: 0,
    y:20,
    transition: {
      type: "spring",
      duration: 0,
      bounce: 0,
    },
  } 
};
