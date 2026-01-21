import Project from "./components/project";
import Sidebar from "./components/sidebar";
import { useState, useRef } from "react";
import DefaultSection from "./components/default-section";
import AddProjectForm from "./components/add-project-form";
import { ProjectsContext } from "./store/project-context";

function App() {
  const [mainSectionState, setMainSectionState] = useState("default");
  const [currentProject, setCurrentProject] = useState(null);
  const [projectsList, setProjectsList] = useState([]);
  const name = useRef();
  const text = useRef();
  const date = useRef();
  const modal = useRef();

  function addProject() {
    const project = {
      name: name.current.value,
      text: text.current.value,
      date: date.current.value,
      tasks: [],
    };
    if (
      project.name.trim() === "" ||
      project.text.trim() === "" ||
      project.date.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    setProjectsList((prevList) => [...prevList, project]);
    setMainSectionState("default");
    setCurrentProject(null);
  }

  function deleteProject() {
    setProjectsList((prevList) =>
      prevList.filter((value) => value.name !== currentProject.name),
    );
    setMainSectionState("default");
    setCurrentProject(null);
  }

  function openForm() {
    setMainSectionState("form");
  }

  function closeForm() {
    setMainSectionState("default");
  }

  function openProject(name) {
    const currentProject = projectsList.find(
      (project) => project.name === name,
    );
    setCurrentProject(currentProject);
    setMainSectionState("project");
  }

  function addTask(taskText) {
    if (!taskText.trim()) return;

    setProjectsList((prevList) => {
      const updatedList = prevList.map((proj) => {
        return proj.name === currentProject.name
          ? { ...proj, tasks: [taskText, ...proj.tasks] }
          : proj;
      });

      const updatedProject = updatedList.find(
        (proj) => proj.name === currentProject.name,
      );
      setCurrentProject(updatedProject);
      return updatedList;
    });
  }

  function deleteTask(taskToDelete) {
    setProjectsList((prevList) => {
      const updatedList = prevList.map((proj) => {
        return proj.name === currentProject.name
          ? {
              ...proj,
              tasks: proj.tasks.filter((task) => task !== taskToDelete),
            }
          : proj;
      });

      const updatedProject = updatedList.find(
        (proj) => proj.name === currentProject.name,
      );
      setCurrentProject(updatedProject);
      return updatedList;
    });
  }

  let content;
  if (mainSectionState === "default") {
    content = <DefaultSection openForm={openForm} />;
  } else if (mainSectionState === "form") {
    content = (
      <AddProjectForm
        onClickCancel={closeForm}
        onClickSave={addProject}
        name={name}
        text={text}
        date={date}
        modal={modal}
      />
    );
  } else if (mainSectionState === "project") {
    content = (
      <Project
        project={currentProject}
        deleteProject={deleteProject}
        addTask={addTask}
        deleteTask={deleteTask}
      />
    );
  }

  return (
    <ProjectsContext
      value={{ projectsList: projectsList, currentProject: currentProject }}
    >
      <main className="flex gap-8 h-screen  pt-16 bg-white w-full">
        <Sidebar openForm={openForm} openProject={openProject} />
        {content}
      </main>
    </ProjectsContext>
  );
}

export default App;
