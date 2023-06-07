import { TodoProps } from "./Todos.types";

const Todos = ({ created, id, task, due }: TodoProps) => {
  return (
    <div>
      <h2>{task}</h2>
      <h4>{id}</h4>
      <p>Created: {created}</p>
      <p>Due: {due}</p>
      {/* <button onClick={() => deleteTodo(id)}></button> */}
    </div>
  );
};

export default Todos;
