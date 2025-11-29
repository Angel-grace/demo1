import React, { useState } from "react";

function NameAgeProcessor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleProcess = () => {
    if (!firstName || !lastName || !age) {
      setMessage("Please enter all fields!");
      return;
    }

    setMessage(`The Age of ${firstName} ${lastName} is ${age}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Name & Age Processor</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />

      <br />

      <button
        onClick={handleProcess}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Process
      </button>

      {message && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

export default NameAgeProcessor;
