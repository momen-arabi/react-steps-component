import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = function () {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleNext = function () {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handleClose = function () {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen ? (
        <>
          <div className="close" onClick={handleClose}>
            &times;
          </div>
          <main className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <div className="message">
              <h3>
                Step {step}: <span>{messages[step - 1]}</span>
              </h3>
            </div>
            <div className="buttons">
              <button onClick={handlePrevious}>
                <span>Previous</span>
              </button>
              <button onClick={handleNext}>
                <span>Next</span>
              </button>
            </div>
          </main>
        </>
      ) : (
        <div className="close" onClick={handleClose}>
          &#128065;
        </div>
      )}
    </>
  );
}

export default App;
