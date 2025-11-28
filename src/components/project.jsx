import { useRef, useState } from "react";
import Button from "./button";
import TasksList from "./tasks-list";

export default function Project({
  project,
  deleteProject,
  addTask,
  deleteTask,
}) {
  const [enteredTask, setEnteredTask] = useState([]);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    addTask(enteredTask);
    setEnteredTask("");
  }

  const formattedDate = new Date(project.date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-2/3 flex flex-col gap-8 justify-start items-start ml-11 mr-24 mt-16 ">
      <div className="flex w-full flex-row items-center  justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-gray-600 normal-case font-bold text-5xl font-sans">
            {project.name}
          </h2>
          <p className="text-gray-500 font-normal text-2xl font-sans">
            {formattedDate}
          </p>
        </div>
        <Button text={"Удалить"} onClick={deleteProject} />
      </div>
      <p className="text-gray-700 w-full font-normal whitespace-pre-wrap text-3xl font-sans relative  after:block after:w-full after:h-px after:bg-gray-700 after:mt-8">
        {project.text}
      </p>

      <form className="flex flex-col gap-4 justify-start min-w-full ">
        <label className="text-gray-600 normal-case font-bold text-3xl font-sans ">
          Задания
        </label>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            onChange={handleChange}
            value={enteredTask}
            className="bg-gray-300 border-none h-12 text-xl font-normal font-sans rounded-sm"
          />
          <Button text={"Добавить задание"} onClick={handleClick} />
        </div>
      </form>
      {project.tasks.length > 0 ? (
        <TasksList tasksList={project.tasks} deleteTask={deleteTask} />
      ) : (
        <p className="text-gray-500 font-normal text-2xl font-sans">
          В проекте пока что нет заданий
        </p>
      )}
    </div>
  );
}
