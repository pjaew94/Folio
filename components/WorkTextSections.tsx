import VisitWorkLink from "./VisitWorkLink";

const WorkTextSections: React.FC<{ title: string; paragraphs: string[], url?: string, github?: string, margin?: boolean }> = ({
  title,
  paragraphs,
  url,
  github,
  margin
}) => {
  return (
    <div className={`mt-40 ${margin && 'mb-40'} flex flex-col pr-6 md:px-28`}>
      <h1 className="text-4xl text-black mb-10 3xl:text-7xl 3xl:mb-20 font-semibold">{title}</h1>
      {paragraphs.map((para, i) => {
        return (
        <p key={i} className="text-base text-black mb-8 3xl:text-4xl 3xl:mb-16">
            {para}
          </p>
        );
      })}
      
      {url && <VisitWorkLink url={url} text="JLCServes.org" />}
      {github && <VisitWorkLink url={github} text="Github" />}
    </div>
  );
};

export default WorkTextSections;
