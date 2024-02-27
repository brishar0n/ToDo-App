import { useState } from "react";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-5 rounded-full" onClick={() => { editTodo(id, editedTitle); setIsEditing(false); }} disabled={editedTitle.length === 0}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {title}
        <button className="mx-3 my-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-5 rounded-full" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="mx-5"
        />
        {todoContent}
        <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-5 rounded-full" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </label>
    </li>
  );
}