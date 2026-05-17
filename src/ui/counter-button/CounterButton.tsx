import { useState } from "react";

interface CounterButtonProps {
  initialCount?: number;
}

export default function CounterButton(props: CounterButtonProps) {
  const [count, setCount] = useState(props.initialCount ?? 0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <button
      type="button"
      aria-label={`Counter button, current count is ${count}`}
      onClick={handleClick}
    >
      Clicks: {count}
    </button>
  );
}
