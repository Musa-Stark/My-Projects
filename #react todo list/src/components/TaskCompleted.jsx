import { getDataFromLS } from "./Input";

const TaskCompleted = ({ id }) => {
  let todos = getDataFromLS();
  const targetItem = todos.find((todo) => todo.id === id);
  // if item is checked -> make unchecked
  if (targetItem.lt === "line-through") {
    targetItem.status = false;
    targetItem.lt = "";
    // if item is unchecked -> make checked
  } else {
    targetItem.lt = "line-through";
    targetItem.status = true;
  }
  localStorage.setItem("list", JSON.stringify(todos));
};

export default TaskCompleted;
