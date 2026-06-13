import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import students from "../data/students";

import ProfileCard from "../components/ProfileCard";

import "../styles/Exchange.css";

function Exchange() {

  const navigate = useNavigate();

  const { setSelectedUser } =
    useContext(AppContext);

  const connectUser = (student) => {

    setSelectedUser(student);

    navigate("/chat");
  };

  return (
    <div className="exchange-page">

      <h1>Skill Exchange</h1>

      <p>
        Find students and start learning
        together.
      </p>

      <div className="student-grid">

        {students.map((student) => (

          <div
            className="student-card"
            key={student.id}
          >

            <ProfileCard
              name={student.name}
              coins={student.coins}
              rating={student.rating}
            />

            <h4>Skills</h4>

            <ul>

              {student.skills.map(
                (skill, index) => (

                  <li key={index}>
                    {skill}
                  </li>

                )
              )}

            </ul>

            <button
              onClick={() =>
                connectUser(student)
              }
            >
              Connect 💬
            </button>

          </div>

        ))}
      </div>

    </div>
  );
}

export default Exchange;