import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Enjoy life till last 😀",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const previousFunction = () => {
    step === 1 ? setStep(messages.length) : setStep(step - 1);
  };
  const nextFunction = () => {
    step === messages.length ? setStep(1) : setStep(step + 1);
  };
  const handleCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="close" onClick={handleCard}>
        {isOpen ? "x" : "="}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, i) => (
              <div className={step >= i + 1 ? "active" : ""}>{i + 1}</div>
            ))}
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button func={previousFunction} text={"Previous"} />
            <Button func={nextFunction} text={"Next"} />
          </div>
        </div>
      )}
    </>
  );
}

function Button({ func, text }) {
  return (
    <button
      onClick={func}
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
    >
      {text}
    </button>
  );
}
