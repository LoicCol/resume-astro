import resume from "@/assets/resume.json";
import type { ExperienceType, EducationType } from "@/types";

export function generateAllPaths() {
  const { work: experiences, education } = resume;

  // Base pages
  const pages = import.meta.glob("/src/pages/**/[!_]*.astro");
  const basePaths = Object.keys(pages)
    .map((path) => {
      const match = path.match(/^\/src\/pages(.+)\.astro$/);
      if (match) {
        let route = match[1];
        if (route.endsWith("/index")) {
          route = route.slice(0, -6) || "/";
        }
        return route;
      }
      return null;
    })
    .filter(Boolean) as string[];

  // Experience pages
  const experiencePaths = [
    "/experiences",
    ...experiences.map(
      (experience: ExperienceType) =>
        `/experiences/${experience.name.toLowerCase()}`,
    ),
  ];

  // Education pages
  const educationPaths = [
    "/education",
    ...education.map(
      (edu: EducationType) => `/education/${edu.studyType.toLowerCase()}`,
    ),
  ];

  // Define the desired order of main pages
  const orderedMainPages = [
    "/",
    ...experiencePaths,
    ...educationPaths,
    "/interests",
  ];

  // Combine all paths in the correct order
  const allPaths = [
    ...orderedMainPages,
    ...basePaths.filter((path) => !orderedMainPages.includes(path)),
  ];

  // Ensure unique paths
  return [...new Set(allPaths)];
}
