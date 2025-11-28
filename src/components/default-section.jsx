import Button from "./button";
import image from "./../assets/no-projects.png";

export default function DefaultSection({ openForm }) {
  return (
    <div className="w-2/3 flex flex-col h-5/6 gap-5 justify-center items-center  ml-11 mr-24 mt-16">
      <img src={image} alt="Пустой лист" className="w-44 h-44 object-contain" />
      <h2 className="text-gray-600 uppercase font-bold text-2xl font-sans">
        Проект не выбран
      </h2>
      <p className="text-gray-500 font-normal text-xl font-sans">
        Выберите проект или начните с создания нового проекта
      </p>
      <Button onClick={openForm} text={"Создать новый проект"} />
    </div>
  );
}
