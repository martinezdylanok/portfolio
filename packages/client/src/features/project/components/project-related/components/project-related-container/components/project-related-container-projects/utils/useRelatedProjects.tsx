import { useEffect, useState } from "react";
import useFetchData from "../../../../../../../../../utils/hooks/useFetchData/useFetchData";
import type { ProjectInterface } from "../../../../../../../data/projectData";
import { getRandomProjects } from "../data/projectRelatedContainerProjectsData";

export interface UseRelatedProjectsReturn {
   relatedProjects: ProjectInterface[];
   loading: boolean;
   error: Error | null;
}

export const useRelatedProjects = (): UseRelatedProjectsReturn => {
   const { data: allProjects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const [relatedProjects, setRelatedProjects] = useState<ProjectInterface[]>([]);

   useEffect(() => {
      if (!loading && !error && allProjects && Array.isArray(allProjects) && allProjects.length > 0) {
         const randomProjects = getRandomProjects(allProjects, 2);
         setRelatedProjects(randomProjects);
      } else if (!loading && !error && !allProjects) {
         setRelatedProjects([]);
      }
   }, [allProjects, loading, error]);

   return {
      relatedProjects,
      loading,
      error,
   };
};
