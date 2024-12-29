const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  return (
    <main className="steps font-sans">
      <div className="close">&times;</div>
      <div className="numbers"></div>
      <div className="message"></div>
      <div className="buttons">
        <button>
          <span>Previous</span>
        </button>
        <button>
          <span>Next</span>
        </button>
      </div>
    </main>
  );
}

export default App;
