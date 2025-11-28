import { useRef } from "react";
import Button from "./button";
import Modal from "./modal";

export default function AddProjectForm({
  onClickCancel,
  onClickSave,
  name,
  text,
  date,
  modal,
}) {
  return (
    <>
      <Modal ref={modal} buttonText={"Закрыть окно"}>
        <h2 className="text-gray-600 uppercase font-bold text-2xl font-sans my-4 text-center">
          Ошибка
        </h2>
        <p className="text-gray-600 font-normal text-xl font-sans mb-4 text-center">
          Упс... кажется вы забыли заполнить какое-то поле
        </p>
        <p className="text-gray-600 font-normal text-xl font-sans mb-4 text-center">
          Пожалуйста, убедитесь, что все поля заполнены
        </p>
      </Modal>
      <div className="w-2/3 flex flex-col gap-12 justify-start ml-11 mr-24 mt-16 ">
        <menu className="flex flex-row justify-end gap-4">
          <li>
            <Button onClick={onClickCancel} text={"Отменить"}></Button>{" "}
          </li>
          <li>
            <Button onClick={onClickSave} text={"Сохранить"}></Button>{" "}
          </li>
        </menu>
        <form className="flex flex-col self-start gap-4 min-w-full">
          <label className="text-gray-600 uppercase font-bold text-xl font-sans flex flex-col gap-4">
            Заголовок
            <input
              ref={name}
              className="bg-gray-300 border-none h-12 text-xl font-normal rounded-sm"
              type="text"
            />
          </label>
          <label className="text-gray-600 uppercase font-bold text-xl font-sans flex flex-col gap-4">
            Описание
            <textarea
              ref={text}
              rows={3}
              type="text"
              className="bg-gray-300 border-none text-xl font-normal rounded-sm"
            ></textarea>
          </label>
          <label className="text-gray-600 uppercase font-bold text-xl font-sans flex flex-col gap-4">
            Выполнить до
            <input
              ref={date}
              type="date"
              className="bg-gray-300 h-12 border-none text-xl font-normal rounded-sm"
            />
          </label>
        </form>
      </div>
    </>
  );
}
