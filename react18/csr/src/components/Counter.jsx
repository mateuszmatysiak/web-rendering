import React, { useState } from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <button className="counter" onClick={() => setCount(count + 1)}>
      <p>{children}</p>
      <strong>{count}</strong>
    </button>
  );
};

export default Counter;
