import { useState } from "react";

/**
 * useCounter
 *
 * @param {number} initValue
 * @param {number} step
 * @returns {[number, { increment: () => void, decrement: () => void }]}
 */
export default function useCounter(initValue, step) {
  const [counter, setCounter] = useState(initValue);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);

  return [counter, { increment, decrement }];
}
