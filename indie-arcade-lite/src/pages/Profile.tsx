import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setPlayerName } from "../redux/playerControl";
import { useState } from "react";

export default function Profile() {
  const dispatch = useDispatch();
  const { name, score } = useSelector((state: RootState) => state.player);
  const [inputName, setInputName] = useState(name);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    dispatch(setPlayerName(inputName));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "1rem", display: "flex", justifyContent: "center"  }}>Profile</h1>
      <br />
      <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <label>Your Name:</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        />
        <button onClick={handleSave} style={{ marginLeft: "1rem" }}>
          Save
        </button>
      </div>
      {saved && <p style={{ color: "lightgreen" }}>✅ Name saved!</p>}
      <p>Current Score: <strong>{score}</strong></p>
    </div>
  );
}