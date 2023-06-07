import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        value={amount}
        name="amount"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;
