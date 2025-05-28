import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

interface Entry {
  name: string;
  score: number;
}

const dummyLeaderboard: Entry[] = [
  { name: "PlayerOne", score: 12 },
  { name: "GamerGirl", score: 9 },
  { name: "SpeedRun42", score: 7 },
];

export default function Leaderboard() {
  const player = useSelector((state: RootState) => state.player);

  const leaderboardBase: Entry[] = [...dummyLeaderboard];

  if (player.name || player.score > 0) {
    leaderboardBase.push({
      name: player.name || "(You)",
      score: player.score,
    });
  }

  const entries = leaderboardBase
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>🏆 Leaderboard</h1>
      <br />
      <ul style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        {entries.map((entry, index) => (
          <li key={index}>
            #{index + 1} {entry.name || "(Anonymous)"} – {entry.score} pts
          </li>
        ))}
      </ul>
    </div>
  );
}