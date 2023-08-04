import { useState } from 'preact/hooks';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onclick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onclick={() => setCount(count - 1)}>
        minus
      </button>
      <button type="button" onclick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};
