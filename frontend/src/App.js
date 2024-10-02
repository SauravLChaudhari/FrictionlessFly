import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("");
  const [flightStatus, setFlightStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/disruptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: flightStatus }),
    });
    const data = await response.json();
    setStatus(data.message);
  };

  return (
    <div>
      <h1>Frictionless Fly</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Flight Status:
          <input
            type="text"
            value={flightStatus}
            onChange={(e) => setFlightStatus(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default App;
