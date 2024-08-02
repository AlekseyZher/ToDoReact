import "./ToDoListItem.scss";
import { ToDo } from "../../../models/todo-item";

export const ToDoLisItem = (props: {
  toDoItem: ToDo;
  upDateToDo: Function;
  deliteToDo: Function;
}) => {
  return (
    <li className="todo-list-item__wrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todo-list-item__buttons">
        <button
          className="btn-trash"
          onClick={() => props.deliteToDo(props.toDoItem)}
        ></button>
        <button
          className={props.toDoItem.isDone ? "btn-check" : "btn-uncheck"}
          onClick={() => props.upDateToDo(props.toDoItem)}
        ></button>
      </div>
    </li>
  );
};
