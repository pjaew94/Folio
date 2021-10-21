import { technologies } from "./../exports/variables";
import { motion } from "framer-motion";
import { resumeSectionVariant } from "./../exports/animations";


const ResumeTechStack: React.FC = () => {
  return (
    <div className="flex flex-col w-5/12">
      <h4 className="font-semibold text-xl">Technologies</h4>

      {technologies.map((tech, i) => {
        return (
          <div key={i} className="flex flex-col font-semibold mb-1">
            <h4 className="text-xs font-sans">{tech}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeTechStack;
