import React from "react";
import "./Analytics.css";

function Analytics() {
  return (
    <div className="analytics-container">
      <h1>📊 Analytics</h1>
      <p>Your usage overview.</p>

      <div className="analytics-box">
        <div className="card">
          <h3>📄 Contracts Uploaded</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>⚖️ Comparisons</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>✍️ Negotiations</h3>
          <p>4</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;