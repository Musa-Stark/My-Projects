import { useRef } from "react";
import TaskCompleted from "./TaskCompleted";

const Item = ({ id, text, status, lt, onCompletion, onEdit, onDelete }) => {
  // refs
  const checkBox = useRef();
  const delt = useRef();
  const edit = useRef()

  // handleCompletion
  const handleCompletion = () => {
    const item = {
      id: checkBox.current.id,
      value: checkBox.current.value,
    };
    TaskCompleted(item);
    onCompletion(true);
  };

  //
  const handleDelete = () => {
    const item = {
      id: checkBox.current.id,
      value: checkBox.current.value,
    };
    onDelete(item);
  };

  const handleEdit = () => {
    const item = {
      id: checkBox.current.id,
      value: checkBox.current.value
    }
    
    onEdit(item)
  }

  return (
    <div className={`flex relative`}>
      {/* checkbox */}
      <input
        ref={checkBox}
        onClick={handleCompletion}
        type="checkbox"
        value={text}
        name="task"
        id={id}
        defaultChecked={status}
      />
      {/* checkbox label */}
      <label htmlFor={id} className={`text-gray-800 ml-2 ${lt} w-full mr-12`}>
        {text}
      </label>
      {/* buttons */}
      <div className="absolute right-0 flex items-center justify-center gap-1 h-full">
        {/* edit */}
        <button onClick={handleEdit}>
          <img
            src="/edit.png"
            className="cursor-pointer hover:opacity-50 active:opacity-80"
            alt="edit"
          />
        </button>
        {/* delete */}
        <button onClick={handleDelete} ref={delt}>
          <img
            src="/delete.svg"
            className="cursor-pointer hover:opacity-50 active:opacity-80"
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};

export default Item;
