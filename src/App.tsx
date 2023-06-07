import { useState } from "react";
import Todos from "./components/Todos/Todos";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: "Do Cleaning", created: "7am", due: "9pm" },
    { id: 2, task: "Do HomeWork", created: "8am", due: "8pm" },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [deleteId, setDeleteID] = useState(0);
  return (
    <div>
      {todo.map((t) => (
        <Todos id={t.id} task={t.task} created={t.created} due={t.due} />
      ))}
      <div>
        <h3>Add Todo</h3>
        <label htmlFor="todo-add">Add Todo</label>
        <input
          type="text"
          name="todo-add"
          id="todo-app"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button
          onClick={() =>
            setTodo((prev) => {
              let array = [...prev];
              array.push({
                id: prev.length + 1,
                task: newTodo,
                created: "6PM",
                due: "9PM",
              });
              setNewTodo("")
              return array;
            })
          }
        >
          Add Todo
        </button>
      </div>
      <div>
        <h3>Remove Todo</h3>
        <label htmlFor="todo-rem">Remove Todo</label>
        <input
          type="number"
          name="todo-rem"
          id="todo-rem"
          onChange={(e) => setDeleteID(parseInt(e.target.value))}
          value={deleteId}
        />
        <button
          onClick={() =>
            setTodo((prev) => {
              let array = prev.filter((t) => t.id !== deleteId);
              console.log(array);
              setDeleteID(array.length);
              return array;
            })
          }
        >
          Remove Todo
        </button>
      </div>
    </div>
  );
};

export default App;
