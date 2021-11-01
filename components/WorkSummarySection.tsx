import VisitWorkLink from "./VisitWorkLink";

const WorkSummarySection: React.FC<{
  title: string;
  paragraphs: string[];
  url: string;
  github: string;
  abbreviation?: string;
}> = ({ title, paragraphs, url, github, abbreviation }) => {
return (
    <div className="flex flex-col pr-6 md:px-28">
      <h1 className="text-4xl text-black mb-10 3xl:text-7xl 3xl:mb-20 font-semibold">{title}</h1>
      <p className=" text-2xl text-black mb-8 3xl:text-4xl 3xl:mb-16">{paragraphs[0]}</p>
      {paragraphs.map((para, i) => {
        return i === 0 ? null : (
          <p key={i} className="text-base text-black mb-8 3xl:text-3xl 3xl:mb-16">{para}</p>
        );
      })}
  
      <VisitWorkLink url={url} text={abbreviation === "jlcServes" ? "JLCServes.org" : "JLCAcademy.com"} />
      <VisitWorkLink url={github} text="Github" />
    </div>
  );
};

export default WorkSummarySection;
