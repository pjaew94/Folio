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

const JlcAcademy: React.FC = () => {
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

      <div className="flex flex-col mt-72">
        {/* title and subtitle */}
        <WorkTitle
          title={projectList[1].name}
          subString={projectList[1].subString}
        />

        {/* Draggable img 1 */}
        {isMobile && (
          <DraggableImg
            disp={projectList[1].imgs[0].disp}
            blur={projectList[1].imgs[0].blur}
          />
        )}
        {!isMobile && (
          <NonDraggableImg
            disp={projectList[1].imgs[0].disp}
            blur={projectList[1].imgs[0].blur}
          />
        )}

        {/* Summary */}
        <WorkSummarySection
          title={projectList[1].name.join(" ")}
          paragraphs={projectList[1].summary}
          url={projectList[1].link}
          github={projectList[1].github}
        />

        {/* History */}
        <WorkTextSections title="History" paragraphs={projectList[1].history} />

        <WorkTextSections title="Problem" paragraphs={projectList[1].problem} />
        <WorkTextSections title="My Role" paragraphs={projectList[1].myRole} />
        <WorkResponsiveFullImg
          img1={projectList[1].imgs[1].disp}
          img1Blur={projectList[1].imgs[1].blur}
          margin={true}
        />

        <WorkResponsiveFullImg
          img1={projectList[1].imgs[2].disp}
          img1Blur={projectList[1].imgs[2].blur}
          margin={false}
        />
        <WorkTextSections
          title="Impact"
          paragraphs={projectList[1].impact}
          url={projectList[1].link}
          github={projectList[1].github}
        />

        <WorkTechStackList technologies={projectList[1].technologies} />
      </div>
    </div>
  );
};

export default JlcAcademy;
