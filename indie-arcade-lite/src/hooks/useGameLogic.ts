import { useState } from "react";

type Choice = "rock" | "paper" | "scissors";
type Result = "win" | "lose" | "draw" | null;

export function useGameLogic() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result>(null);

  const choices: Choice[] = ["rock", "paper", "scissors"];

  const play = (choice: Choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const cpuChoice = choices[randomIndex];
    setPlayerChoice(choice);
    setComputerChoice(cpuChoice);
    setResult(getResult(choice, cpuChoice));
  };

  const getResult = (player: Choice, cpu: Choice): Result => {
    if (player === cpu) return "draw";
    if (
      (player === "rock" && cpu === "scissors") ||
      (player === "paper" && cpu === "rock") ||
      (player === "scissors" && cpu === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  return {
    play,
    playerChoice,
    computerChoice,
    result,
  };
}