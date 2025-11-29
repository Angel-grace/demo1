import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleProcess = () => {
    if (!firstName || !lastName || !age) {
      setMessage("Please fill all fields!");
      return;
    }

    setMessage(`The Age of ${firstName} ${lastName} is ${age}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Age Processor</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button onClick={handleProcess}>Process</button>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

export default App;
