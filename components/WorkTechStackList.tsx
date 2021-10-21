const WorkTechStackList: React.FC<{
  technologies: { tech: string; desc: string }[];
}> = ({ technologies }) => {
  return (
    <div className="mt-40 flex flex-col pr-6 md:px-28">
      <h1 className="text-4xl text-black mb-10 3xl:text-7xl 3xl:mb-20">Tech Stack</h1>
      {technologies.map((tech, i) => {
        return (
          <div key={i} className="flex flex-col mb-10">
            <p  className="font-semibold text-black mb-3 3xl:text-4xl">
              {tech.tech}
            </p>
            <p  className="text-base text-gray 3xl:text-3xl">
              {tech.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkTechStackList;
