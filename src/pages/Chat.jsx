import { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";

import "../styles/Chat.css";

function Chat() {

  const { selectedUser } =
    useContext(AppContext);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const generateReply = (msg) => {

    msg = msg.toLowerCase();

    if (msg.includes("react")) {
      return "React roadmap: Components → Props → State → Hooks → Routing.";
    }

    if (msg.includes("java")) {
      return "Start with OOP concepts, Collections, JDBC and Spring Boot.";
    }

    if (msg.includes("python")) {
      return "Learn Python basics, OOP, NumPy, Pandas and AI libraries.";
    }

    if (
      msg.includes("hello") ||
      msg.includes("hi")
    ) {
      return "Hello! How can I help you learn today?";
    }

    return "Keep learning and growing through SkillSwap.";
  };

  const sendMessage = () => {

    if (!message.trim()) return;

    const userMsg = {
      sender: "You",
      text: message
    };

    const aiMsg = {
      sender: "AI Mentor",
      text: generateReply(message)
    };

    setMessages([
      ...messages,
      userMsg,
      aiMsg
    ]);

    setMessage("");
  };

  return (
    <div className="chat-page">

      <h1>
        Chat With:
        {" "}
        {selectedUser
          ? selectedUser.name
          : "No User Selected"}
      </h1>

      <div className="chat-box">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={
              msg.sender === "You"
                ? "user-msg"
                : "ai-msg"
            }
          >

            <strong>
              {msg.sender}:
            </strong>

            {" "}
            {msg.text}

          </div>

        ))}

      </div>

      <div className="chat-input">

        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default Chat;