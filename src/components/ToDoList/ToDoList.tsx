import { ToDoLisItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";

export const ToDoList = (props: {
  todos: ToDo[];
  upDateToDo: Function;
  deliteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, ind) => {
        return (
          <ToDoLisItem
            toDoItem={item}
            key={ind}
            upDateToDo={props.upDateToDo}
            deliteToDo={props.deliteToDo}
          />
        );
      });
  };
  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, ind) => {
        return (
          <ToDoLisItem
            toDoItem={item}
            key={ind}
            upDateToDo={props.upDateToDo}
            deliteToDo={props.deliteToDo}
          />
        );
      });
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{checkedList()}</ul>
      <ul className="todo-list completed">{unCheckedList()}</ul>
    </div>
  );
};
