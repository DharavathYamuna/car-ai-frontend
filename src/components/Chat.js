import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  // Auto scroll 👇
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Dummy AI reply
  const getBotReply = (question) => {
    if (question.toLowerCase().includes("apr"))
      return "Your APR looks slightly high. Try negotiating for a lower rate.";
    if (question.toLowerCase().includes("mileage"))
      return "If you exceed mileage, you may be charged extra per km.";
    if (question.toLowerCase().includes("hidden"))
      return "Yes, check for hidden fees like disposition or early termination.";
    if (question.toLowerCase().includes("buyout"))
      return "Buyout options depend on your lease agreement.";
    return "This is a demo response. Backend AI will answer properly later.";
  };

  const sendMessage = (text) => {
    if (!text) return;

    const userMsg = { type: "user", text };
    const botMsg = { type: "bot", text: getBotReply(text) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h1>💬 Chat with Your Contract</h1>
      <p>Ask anything about your contract — terms, clauses, what to watch out for.</p>

      {/* Suggestions */}
      <div className="suggestions">
        <button onClick={() => sendMessage("Is my APR rate competitive?")}>
          Is my APR rate competitive?
        </button>
        <button onClick={() => sendMessage("What happens if I go over mileage?")}>
          What happens if I go over mileage?
        </button>
        <button onClick={() => sendMessage("Can I negotiate the disposition fee?")}>
          Can I negotiate the disposition fee?
        </button>
        <button onClick={() => sendMessage("Explain the early termination clause")}>
          Explain the early termination clause
        </button>
        <button onClick={() => sendMessage("What are my buyout options?")}>
          What are my buyout options?
        </button>
        <button onClick={() => sendMessage("Are there any hidden fees?")}>
          Are there any hidden fees?
        </button>
      </div>

      {/* Chat Messages */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.type === "user" ? "user-msg" : "bot-msg"}>
            {msg.text}
          </div>
        ))}

        {/* 🔥 Auto scroll target */}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="input-area">
        <input
          type="text"
          placeholder="Ask about your contract..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => sendMessage(input)}>➤</button>
      </div>
    </div>
  );
}

export default Chat;