import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementScore } from "../redux/playerControl";
import { useGameLogic } from "../hooks/useGameLogic";
import Modal from "../components/Modal";

export default function Play() {
  const dispatch = useDispatch();
  const { play, playerChoice, computerChoice, result } = useGameLogic();
  const [showModal, setShowModal] = useState(false);

  const handlePlay = (choice: "rock" | "paper" | "scissors") => {
    play(choice);
  };

  useEffect(() => {
    if (result) {
      setShowModal(true);
      if (result === "win") {
        dispatch(incrementScore());
      }
    }
  }, [result, dispatch]);

  const resetGame = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Rock-Paper-Scissors</h1>
      <br />
      <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center", flexDirection: "column", gap: "30px" }}>
        <button onClick={() => handlePlay("rock")}>🪨 Rock</button>
        <button onClick={() => handlePlay("paper")}>📄 Paper</button>
        <button onClick={() => handlePlay("scissors")}>✂️ Scissors</button>
      </div>

      <Modal isOpen={showModal} onClose={resetGame}>
        <h2>Result: {result?.toUpperCase()}</h2>
        <p>You chose: {playerChoice}</p>
        <p>Computer chose: {computerChoice}</p>
      </Modal>
    </div>
  );
}