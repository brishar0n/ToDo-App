import { useState } from "react";

export function TodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <div>
      <form>
        <div>
          <label class="font-semibold" htmlFor="item">Enter a new task: </label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="w-full"
          />
        </div>
        <button class="bg-lime-900 hover:bg-lime-800 text-white font-medium w-full py-1 px-4 my-5 rounded" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
