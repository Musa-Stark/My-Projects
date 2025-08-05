import { useState, useEffect, useRef } from "react";
import { H, Input, Item, Button } from "./components";
import { getDataFromLS } from "./components/Input";

function App() {
  // useStates
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState(false);
  const [completion, setCompletion] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [delt, setDelt] = useState(false);

  // handleInput
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // fetchDataFromLS
  useEffect(() => {
    let todos = getDataFromLS() || [];
    if (todos && todos.length > 0 && !showAll) {
      todos = JSON.parse(localStorage.getItem("list")).filter(
        (item) => item.lt !== "line-through"
      );
    }
    setItems(todos);
  }, [newTask, completion, showAll, delt]);

  // toggleShowAll
  const ShowCompletedTask = () => {
    setShowAll(!showAll);
  };

  // toggle showFinishedText
  const showFinishedText = showAll ? "Hide Finished" : "Show Finished";

  // check for newTask and then clear input.value
  const newItem = (value) => {
    if (value) {
      setNewTask(true);
      setInput("");
      setTimeout(() => {
        setNewTask(false);
      }, 500);
    }
  };

  // check for completion
  const completed = (value) => {
    if (value) {
      setCompletion(true);
      setTimeout(() => {
        setCompletion(false);
      }, 500);
    }
  };

  // edit an item
  const edit = (value) => {
    setInput(value.value);
    const todos = getDataFromLS();
    const updatedTodos = todos.filter((item) => item.id !== value.id);
    localStorage.setItem("list", JSON.stringify(updatedTodos));
    setDelt(true);
    setTimeout(() => {
      setDelt(false);
    }, 100);
  };

  // delete an item
  const deleted = (value) => {
    const todos = getDataFromLS();
    const updatedTodos = todos.filter((item) => item.id !== value.id);
    localStorage.setItem("list", JSON.stringify(updatedTodos));
    setDelt(true);
    setTimeout(() => {
      setDelt(false);
    }, 100);
  };

  const todosRef = useRef();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="container max-w-[90%] p-4 rounded-xl w-auto">
        {/* h1 */}
        <H
          size="text-xl sm:text-2xl"
          center="text-center"
          mt=""
          text="iTask - Manage your todos at one place"
        />
        {/* h2 */}
        <H mt="mt-4" text="Add a todo" />
        {/* search */}
        <Input onNewItem={newItem} text={input} onChange={handleInput} />
        {/* show completed */}
        <Button
          mt="mt-4"
          bgColor="bg-blue-600"
          hBgColor="hover:bg-blue-700"
          aBgColor="active:bg-blue-900"
          outline="outline-blue-600"
          text={showFinishedText}
          onClick={ShowCompletedTask}
        />
        {/* hr */}
        <hr className="mt-4 border-none block h-0.5 bg-gray-400/50 w-full" />
        {/* h3 */}
        <H mt="mt-4" text="Your Todos" />
        {/* items */}
        <div ref={todosRef}>
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                lt={item.lt}
                status={item.status}
                id={item.id}
                text={item.item}
                display={item.display}
                onCompletion={completed}
                onEdit={edit}
                onDelete={deleted}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
