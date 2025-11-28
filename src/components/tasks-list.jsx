import Button from "./button";

export default function TasksList({ tasksList, deleteTask }) {
  function handleClick(task) {
    deleteTask(task);
  }

  return (
    <ul className="bg-gray-100 w-full flex flex-col gap-2 justify-center items-start">
      {tasksList.map((task, index) => (
        <div
          key={index}
          className="flex w-full flex-row items-center  justify-between p-2"
        >
          <li className="text-gray-700 font-normal text-lg font-sans  ">
            {task}
          </li>
          <Button text={"Удалить"} onClick={() => handleClick(task)} />
        </div>
      ))}
    </ul>
  );
}
