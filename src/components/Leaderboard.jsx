import students from "../data/students";

function Leaderboard() {

  const sorted =
    [...students].sort(
      (a, b) => b.coins - a.coins
    );

  return (

    <div className="leaderboard">

      <h2>
        🏆 Top Performers
      </h2>

      {sorted.map((student) => (

        <div
          key={student.id}
          className="leader-item"
        >

          <span>
            {student.name}
          </span>

          <span>
            {student.coins}
          </span>

        </div>

      ))}

    </div>
  );
}

export default Leaderboard;