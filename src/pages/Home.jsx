import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <h1>
            Learn Skills.
            <br />
            Teach Skills.
            <br />
            Grow Together.
          </h1>

          <p>
            SkillSwap connects students who want to learn,
            teach and collaborate through peer-to-peer
            skill exchange.
          </p>

          <div className="hero-buttons">

            <Link to="/exchange">
              <button className="primary-btn">
                Start Learning
              </button>
            </Link>

            <Link to="/dashboard">
              <button className="secondary-btn">
                Explore Dashboard
              </button>
            </Link>

          </div>

        </div>

      </section>

      <section className="features">

        <h2>Platform Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🎓 Skill Learning</h3>
            <p>
              Learn from students who already possess
              the skills you need.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤝 Skill Exchange</h3>
            <p>
              Connect with peers and exchange knowledge.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Recommendations</h3>
            <p>
              Get smart recommendations based on
              your interests.
            </p>
          </div>

          <div className="feature-card">
            <h3>🪙 Skill Coins</h3>
            <p>
              Earn rewards for contributing to the
              community.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;