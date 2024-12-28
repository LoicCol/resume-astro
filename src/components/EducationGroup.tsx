import React from "react";
import AnimatedBackground from "@/components/ui/animated-background";
import { formattedPeriod } from "../utils/formattedPeriod";
import type { EducationType } from "@/types";

interface EducationGroupProps {
  education: EducationType[];
}

const EducationGroup: React.FC<EducationGroupProps> = ({ education }) => {
  return (
    <div className="flex flex-col rounded-[4px] w-full">
      {education.map((educ, index) => (
        <div
          key={index}
          className="p-4  gap-2"
          style={{
            viewTransitionName: `education-${educ.studyType.toLowerCase()}`,
          }}
        >
          <div className="flex justify-between  gap-2">
            <p
              className="text-xl"
              style={{
                viewTransitionName: index === 0 ? "education-title" : "",
              }}
            >
              {educ.studyType},{" "}
              <a
                href={educ.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold"
              >
                {educ.institution}
              </a>
            </p>
            <p
              className=" text-sm dark:text-white"
              style={{
                viewTransitionName: index === 0 ? "education-dates" : "",
              }}
            >
              {formattedPeriod({
                startDate: educ.startDate,
                endDate: educ.endDate,
              })}
            </p>
          </div>
          <p
            className="text-sm italic dark:text-white"
            style={{
              viewTransitionName: index === 0 ? "education-area" : "",
            }}
          >
            {educ.area}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationGroup;
