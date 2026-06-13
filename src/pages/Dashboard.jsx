import StatCard from "../components/StatCard";
import Leaderboard from "../components/Leaderboard";

import "../styles/Dashboard.css";

function Dashboard() {

  return (
    <div className="dashboard">

      <h1>Dashboard Overview</h1>

      <div className="stats-container">

        <StatCard
          title="Active Students"
          value="120"
        />

        <StatCard
          title="Skill Matches"
          value="85"
        />

        <StatCard
          title="Chat Sessions"
          value="230"
        />

        <StatCard
          title="Skills Shared"
          value="450"
        />

      </div>

      <div className="dashboard-section">

        <Leaderboard />

      </div>

      <div className="activity-box">

        <h2>Recent Activity</h2>

        <ul>

          <li>
            Arjun taught React to 3 students.
          </li>

          <li>
            Priya earned 50 Skill Coins.
          </li>

          <li>
            Rahul completed AI Learning Path.
          </li>

          <li>
            Kiran shared UI/UX resources.
          </li>

        </ul>

      </div>

    </div>
  );
}

export default Dashboard;