import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout() {
  return (
    <div className="app-container">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/profile">Profile</Link>
        <ThemeToggle />
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}