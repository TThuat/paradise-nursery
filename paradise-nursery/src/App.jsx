import { useState } from "react";
import "./App.css";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <h1>🌿 Paradise Nursery</h1>

      {!started ? (
        <button onClick={() => setStarted(true)}>
          Get Started
        </button>
      ) : (
        <h2>Welcome to Paradise Nursery 🌱</h2>
      )}
    </div>
  );
}