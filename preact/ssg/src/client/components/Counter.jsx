import { h } from "preact";
import { useState } from "preact/hooks";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <button className="counter" onClick={() => setCount(count + 1)}>
      <span>{children}</span>
      <span>{`[${count}]`}</span>
    </button>
  );
};

export default Counter;
