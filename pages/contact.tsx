import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col justify-between h-screen w-screen px-6 pt-2 pb-5'>
        <div></div>


      <div className="flex justify-between align-bottom">
        <Navigation />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
