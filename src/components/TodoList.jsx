import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div>
      <h1 className="font-semibold"> To-do List:</h1>
      <ul className="list">
        {todos.length === 0 && "No to-dos yet!"}
        {todos.map((todo, id) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
