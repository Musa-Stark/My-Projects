import Button from "./Button";
import { v4 as uuidv4 } from "uuid";

// getDataFromLS
export const getDataFromLS = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

// Main
const Input = ({ onNewItem, text, onChange, editedTask }) => {
  // handleInputClick
  const handleInputClick = () => {
    if (text && text.length > 0 && text !== "") {
      saveDataInLS();
      onNewItem(true);
    }
    return;
  };

  // handleInputKeyDown
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && text && text.length > 0 && text !== "") {
      saveDataInLS();
      onNewItem(true);
    }
    return;
  };

  // saveDataInLS
  const saveDataInLS = () => {
    let list = getDataFromLS();
    const task = { id: uuidv4(), item: text, lt: "", status: false };
    list.push(task);
    localStorage.setItem("list", JSON.stringify(list));
  };

  // return
  return (
    <div className="w-xl max-w-full flex items-center justify-center gap-3 mt-3">
      {/* input */}
      <input
        type="text"
        name="input"
        id="input"
        className="w-full border-0 rounded-xl bg-white px-3 py-2 outline-0"
        value={text}
        onChange={onChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Enter Todo..."
        autoComplete="off"
        autoFocus="on"
      />
      {/* save */}
      <Button text="Save" onClick={handleInputClick} />
    </div>
  );
};

export default Input;
