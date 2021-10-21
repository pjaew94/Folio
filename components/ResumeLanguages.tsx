import { languages } from "../exports/variables";
import { motion } from 'framer-motion';
import { resumeSectionVariant } from './../exports/animations';
const ResumeLanguages: React.FC = () => {
  return (
    <div className="flex flex-col w-5/12">
      <h4 className="font-semibold text-xl">Languages</h4>

      {languages.map((lang, i) => {
        return (
          <div key={i} className="flex flex-col font-semibold mb-1">
            <h4 className="text-xs font-sans">{lang}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeLanguages;
