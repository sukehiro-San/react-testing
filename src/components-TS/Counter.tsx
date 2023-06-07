import { useReducer } from "react";

type CounterState = {
  count: number;
};
// type CounterAction = {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// };

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: UpdateAction | ResetAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        {"-"}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      >
        {"+"}
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        {"+"}
      </button>
    </>
  );
};

export default Counter;
