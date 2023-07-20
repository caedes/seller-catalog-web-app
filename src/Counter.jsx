import { number } from "prop-types";

import useCounter from "./hooks/useCounter";

export default function Counter({ initValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initValue, step);

  return (
    <>
      <h4>{counter}</h4>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
    </>
  );
}

Counter.propTypes = {
  initValue: number,
  step: number,
};
