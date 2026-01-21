import { createContext } from "react";

export const ProjectsContext = createContext({
  projectsList: [],
  currentProject: null,
});
