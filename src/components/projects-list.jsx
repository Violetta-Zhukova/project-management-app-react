export default function ProjectsList({
  projectsList,
  currentProject,
  openProject,
}) {
  function handleClick(name) {
    openProject(name);
  }

  return (
    <ul className=" flex flex-col gap-2 ">
      {projectsList.map((project, index) => {
        let style;
        if (currentProject) {
          const isActive = project.name === currentProject.name;
          style = isActive
            ? "text-white  font-normal text-lg font-sans bg-gray-900 cursor-pointer"
            : "text-white  font-normal text-lg font-sans hover:bg-gray-900 cursor-pointer";
        } else {
          style =
            "text-white  font-normal text-lg font-sans hover:bg-gray-900 cursor-pointer";
        }

        return (
          <li className={style} key={index}>
            <button
              onClick={() => handleClick(project.name)}
              type="button"
              className="bg-transparent border-none w-full text-left"
            >
              {project.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
