import Navigation from "./Navigation";
import Footer from "./Footer";

const NavAndFooterMobile: React.FC = () => {
  return (
    <div className="flex flex-col w-full fixed bottom-0 left-0">
      <div className="w-full h-5 bg-gradient-to-t from-beige z-index-20" />

      <div
        className="flex w-full justify-between px-6 pb-5 md:p-10 3xl:p-16 z-20 
            bg-beige"
      >
        <Navigation />
        <Footer />
      </div>
    </div>
  );
};

export default NavAndFooterMobile;
