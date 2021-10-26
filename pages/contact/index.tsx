import { useEffect, useState } from "react";
import ContactMobile from "../../components/ContactMobile";
import ContactTabletDesktop from "../../components/ContactTabletDesktop";


const Contact: React.FC = () => {


  const [isMobile, setIsMobile] = useState(false);
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, [window.innerWidth]);
  }

  return (
    <div className="flex  h-screen w-screen px-6 pt-2 pb-5 3xl:p-16">
      {isMobile && (
        <ContactMobile

        />
      )}
      {!isMobile && (
        <ContactTabletDesktop

        />
      )}
    </div>
  );
};

export default Contact;
