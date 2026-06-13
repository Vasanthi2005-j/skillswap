function AIRecommender({ interest }) {

  const recommendations = {

    Frontend: [
      "React",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    Backend: [
      "Node.js",
      "Express",
      "MongoDB"
    ],

    AI: [
      "Python",
      "Pandas",
      "Machine Learning"
    ],

    UIUX: [
      "Figma",
      "Wireframing",
      "Design Systems"
    ]
  };

  return (
    <div>

      <h3>
        AI Recommended Skills
      </h3>

      <ul>

        {recommendations[
          interest
        ]?.map((item, index) => (

          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default AIRecommender;