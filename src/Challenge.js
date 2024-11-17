import "./challenge.css";
import { useState } from "react";

export default function Challenge() {
  // Hooks
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // Functions

  function decreaseStep() {
    setStep(step - 1);
  }
  function increaseStep() {
    setStep(step + 1);
  }
  function decreaseCount() {
    setCount(count - step);
  }
  function increaseCount() {
    setCount(count + step);
  }
  return (
    <>
      <div className="step">
        <button onClick={decreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <Count
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        step={step}
      />
    </>
  );
}
function Count({ count, decreaseCount, increaseCount }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="count">
        <button onClick={decreaseCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <p className="message">
        {count === 0 && `Today is ${date.toDateString()}`}
        {count < 0 &&
          `${Math.absolute(count)} ${
            count === -1 ? "day" : "days"
          } ago was ${date.toDateString()}`}
        {count > 0 &&
          `${count} ${
            count === 1 ? "day" : "days"
          } from today is ${date.toDateString()}`}
      </p>
    </>
  );
}
// .toDateString()
