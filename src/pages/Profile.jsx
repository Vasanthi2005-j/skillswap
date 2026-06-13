import { useState, useContext } from "react";

import { AppContext } from "../context/AppContext";

import AIRecommender from "../components/AIRecommender";

import SkillCard from "../components/SkillCard";

import "../styles/Profile.css";

function Profile() {

  const {
    coins,
    setCoins,
    teachSkills,
    setTeachSkills,
    learnSkills,
    setLearnSkills
  } = useContext(AppContext);

  const [teachInput, setTeachInput] =
    useState("");

  const [learnInput, setLearnInput] =
    useState("");

  const [interest, setInterest] =
    useState("Frontend");

  const addTeachSkill = () => {

    if (!teachInput) return;

    setTeachSkills([
      ...teachSkills,
      teachInput
    ]);

    setCoins(coins + 20);

    setTeachInput("");
  };

  const addLearnSkill = () => {

    if (!learnInput) return;

    setLearnSkills([
      ...learnSkills,
      learnInput
    ]);

    setCoins(coins - 10);

    setLearnInput("");
  };

  return (
    <div className="profile-page">

      <h1>My Profile</h1>

      <div className="coin-box">

        Skill Coins: {coins}

      </div>

      <div className="skill-section">

        <h2>Skills I Can Teach</h2>

        <input
          type="text"
          value={teachInput}
          placeholder="Enter Skill"
          onChange={(e) =>
            setTeachInput(e.target.value)
          }
        />

        <button onClick={addTeachSkill}>
          Add Skill (+20 Coins)
        </button>

        <div className="skill-list">

          {teachSkills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>

      </div>

      <div className="skill-section">

        <h2>Skills I Want To Learn</h2>

        <input
          type="text"
          value={learnInput}
          placeholder="Enter Skill"
          onChange={(e) =>
            setLearnInput(e.target.value)
          }
        />

        <button onClick={addLearnSkill}>
          Request Skill (-10 Coins)
        </button>

        <div className="skill-list">

          {learnSkills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
            />
          ))}

        </div>

      </div>

      <div className="recommendation-box">

        <h2>AI Skill Recommendation</h2>

        <select
          value={interest}
          onChange={(e) =>
            setInterest(e.target.value)
          }
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>AI</option>
          <option>UIUX</option>
        </select>

        <AIRecommender
          interest={interest}
        />

      </div>

    </div>
  );
}

export default Profile;