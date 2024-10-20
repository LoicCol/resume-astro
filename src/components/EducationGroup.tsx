import React from "react";
import AnimatedBackground from "@/components/ui/animated-background";
import { formattedPeriod } from "../utils/formattedPeriod";
import type { EducationType } from "@/types";

interface EducationGroupProps {
  education: EducationType[];
}

const EducationGroup: React.FC<EducationGroupProps> = ({ education }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <AnimatedBackground
        defaultValue={`education-${education[0].studyType.toLowerCase()}`}
        className=" rounded-[4px] bg-neutral-900 w-full"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {education.map((educ, index) => (
          <div className="relative inline-flex" data-id={`education-${index}`}>
            <div
              key={index}
              className="p-4  gap-2"
              style={{
                viewTransitionName: `education-${educ.studyType.toLowerCase()}`,
              }}
            >
              <div className="flex justify-between  gap-2">
                <p className="text-xl">
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
                <p className=" text-sm dark:text-white">
                  {formattedPeriod({
                    startDate: educ.startDate,
                    endDate: educ.endDate,
                  })}
                </p>
              </div>
              <p className="text-sm italic dark:text-white">{educ.area}</p>
            </div>
            <a
              href={`/education/${educ.studyType.toLowerCase()}`}
              className="absolute inset-0"
            />
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
};

export default EducationGroup;
