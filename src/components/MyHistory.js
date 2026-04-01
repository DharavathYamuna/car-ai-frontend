<<<<<<< HEAD
import React from "react";
import "./MyHistory.css";

function MyHistory() {
  const history = [
    { id: 1, action: "Uploaded Honda Contract", date: "2026-04-01" },
    { id: 2, action: "Compared Honda vs Toyota", date: "2026-04-01" },
    { id: 3, action: "Generated Negotiation Email", date: "2026-04-01" },
  ];

  return (
    <div className="history-container">
      <h1>📂 My History</h1>
      <p>Track your previous actions.</p>

      <div className="history-list">
        {history.map((item) => (
          <div key={item.id} className="history-item">
            <p><strong>{item.action}</strong></p>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

=======
import React from "react";
import "./MyHistory.css";

function MyHistory() {
  const history = [
    { id: 1, action: "Uploaded Honda Contract", date: "2026-04-01" },
    { id: 2, action: "Compared Honda vs Toyota", date: "2026-04-01" },
    { id: 3, action: "Generated Negotiation Email", date: "2026-04-01" },
  ];

  return (
    <div className="history-container">
      <h1>📂 My History</h1>
      <p>Track your previous actions.</p>

      <div className="history-list">
        {history.map((item) => (
          <div key={item.id} className="history-item">
            <p><strong>{item.action}</strong></p>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

>>>>>>> 2df88c05edbcd7bfc1840233159724fd1fcbd7e9
export default MyHistory;