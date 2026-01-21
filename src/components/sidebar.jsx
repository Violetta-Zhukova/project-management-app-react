import Button from "./button";
import ProjectsList from "./projects-list";

export default function Sidebar({ openForm, openProject }) {
  return (
    <aside className="w-1/3 md:w-72 bg-black flex flex-col gap-12 py-16 px-10 rounded-r-xl">
      <h2 className="text-white uppercase font-semibold text-3xl font-sans mb-8">
        Ваши проекты
      </h2>
      <Button onClick={openForm} text={"+ Добавить проект"} />
      <ProjectsList openProject={openProject} />
    </aside>
  );
}
