import { useState, useEffect } from "react";
import AboutMobileContent from "./../components/AboutMobileContent";
import AboutTabletDesktopContent from "../components/AboutTabletDesktopContent";

const About: React.FC = () => {

  const [isWhat, setIsWhat] = useState<"isMobile" | "isTablet" | null>(null);
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 768) {
        setIsWhat("isMobile");
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setIsWhat("isTablet");
      } else {
        setIsWhat(null);
      }
    }, [window.innerWidth]);
  }

  return (
    <div className='bg-beige'>
      {isWhat === 'isMobile' ? (
        <AboutMobileContent />
      ) : (
        <AboutTabletDesktopContent />
      )}
    </div>
  );
};

export default About;
