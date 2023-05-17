/* https://react.dev/learn/adding-interactivity
Setting state requests a new re-render, but does not change it in the already running code.
So score continues to be 0 right after you call setScore(score + 1).

You can fix this by passing an updater function when setting state. 
Notice how replacing setScore(score + 1) with setScore(s => s + 1) fixes the “+3” button.
This lets you queue multiple state updates. */

import { useState } from "react";

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore((s) => s + 1);
  }

  return (
    <>
      <h2>This is the Counter component</h2>
      <button onClick={() => increment()}>+1</button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <h1>Score: {score}</h1>
    </>
  );
}
