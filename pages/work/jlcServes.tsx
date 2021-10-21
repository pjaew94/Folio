import { projectList } from "../../exports/variables";
import JwpWorksLink from "./../../components/JwpWorksLink";
import DraggableImg from "../../components/DraggableImg";
import WorkTitle from "./../../components/WorkTitle";
import WorkSummarySection from "../../components/WorkSummarySection";
import WorkTextSections from "../../components/WorkTextSections";
import WorkResponsiveFullImg from "../../components/WorkResponsiveFullImg";
import WorkTechStackList from "../../components/WorkTechStackList";
import ScrollProgressBar from "./../../components/ScrollProgressBar";
import NonDraggableImg from "../../components/NonDraggableImg";
import { useState, useEffect } from "react";

const JlcServes: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  if (typeof window !== "undefined") {
    useEffect(() => {
      if (window.innerWidth < 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, [window.innerWidth]);
  }

  return (
    <div className="flex flex-col w-screen bg-white pl-6 pt-2 pb-5 md:p-10 relative overflow-x-hidden lg:px-28 xl:px-48 2xl:px-96 3xl:px-3xl 3xl:py-72">
      <ScrollProgressBar />
      <JwpWorksLink />

      <div className="flex flex-col mt-72 ">
        <WorkTitle
          title={projectList[0].name}
          subString={projectList[0].subString}
        />

        {isMobile && (
          <DraggableImg
            disp={projectList[0].imgs[0].disp}
            blur={projectList[0].imgs[0].blur}
          />
        )}
        {!isMobile && (
          <NonDraggableImg
            disp={projectList[0].imgs[0].disp}
            blur={projectList[0].imgs[0].blur}
          />
        )}

        <WorkSummarySection
          title={projectList[0].name.join(" ")}
          paragraphs={projectList[0].summary}
          url={projectList[0].link}
          github={projectList[0].github}
        />

        <WorkTextSections
          title="History"
          paragraphs={projectList[0].history}
          margin={true}
        />

        <WorkResponsiveFullImg
          img1={projectList[0].imgs[1].disp}
          img1Blur={projectList[0].imgs[1].blur}
          margin={false}
        />

        <WorkTextSections title="Problem" paragraphs={projectList[0].problem} />
        <WorkTextSections title="My Role" paragraphs={projectList[0].myRole} />
        <WorkResponsiveFullImg
          img1={projectList[0].imgs[2].disp}
          img1Blur={projectList[0].imgs[2].blur}
          margin={true}
        />
        <WorkResponsiveFullImg
          img1={projectList[0].imgs[3].disp}
          img1Blur={projectList[0].imgs[3].blur}
          margin={true}
        />

        <WorkResponsiveFullImg
          img1={projectList[0].imgs[4].disp}
          img1Blur={projectList[0].imgs[4].blur}
          margin={false}
        />
        <WorkTextSections
          title="Impact"
          paragraphs={projectList[0].impact}
          url={projectList[0].link}
          github={projectList[0].github}
        />

        <WorkTechStackList technologies={projectList[0].technologies} />
      </div>
    </div>
  );
};

export default JlcServes;
