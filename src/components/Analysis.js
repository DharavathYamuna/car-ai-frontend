<<<<<<< HEAD
import React, { useState } from "react";
import "./Analysis.css";

export default function Analysis({ contractText }) {
  const [run, setRun] = useState(false);

  return (
    <div className="analysis-container">

      <h1>🔍 Contract Analysis</h1>

      {!run && (
        <button className="run-btn" onClick={() => setRun(true)}>
          📊 Run Full Analysis
        </button>
      )}

      {run && (
        <div className="analysis-box">

          <div className="section">
            <h3>1. Overall Assessment</h3>
            <p>
              This vehicle lease agreement appears to be a standard contract.
              However, there are several important clauses that require attention.
            </p>
          </div>

          <div className="section">
            <h3>2. Top 3 Concerns</h3>

            <p><b>1. Hidden Fees:</b> Possible extra charges like late fees and mileage penalties.</p>

            <p><b>2. Insurance Requirements:</b> Full coverage insurance is mandatory.</p>

            <p><b>3. Mileage Limit:</b> Exceeding limit may lead to penalties.</p>
          </div>

          <div className="section">
            <h3>3. Recommendations</h3>

            <ul>
              <li>Ask for full fee breakdown</li>
              <li>Clarify insurance terms</li>
              <li>Confirm mileage limits</li>
            </ul>
          </div>

          <div className="section">
            <h3>4. Final Verdict</h3>
            <p className="verdict">⚠️ Medium Risk Contract</p>
          </div>

        </div>
      )}

    </div>
  );
=======
import React, { useState } from "react";
import "./Analysis.css";

export default function Analysis({ contractText }) {
  const [run, setRun] = useState(false);

  return (
    <div className="analysis-container">

      <h1>🔍 Contract Analysis</h1>

      {!run && (
        <button className="run-btn" onClick={() => setRun(true)}>
          📊 Run Full Analysis
        </button>
      )}

      {run && (
        <div className="analysis-box">

          <div className="section">
            <h3>1. Overall Assessment</h3>
            <p>
              This vehicle lease agreement appears to be a standard contract.
              However, there are several important clauses that require attention.
            </p>
          </div>

          <div className="section">
            <h3>2. Top 3 Concerns</h3>

            <p><b>1. Hidden Fees:</b> Possible extra charges like late fees and mileage penalties.</p>

            <p><b>2. Insurance Requirements:</b> Full coverage insurance is mandatory.</p>

            <p><b>3. Mileage Limit:</b> Exceeding limit may lead to penalties.</p>
          </div>

          <div className="section">
            <h3>3. Recommendations</h3>

            <ul>
              <li>Ask for full fee breakdown</li>
              <li>Clarify insurance terms</li>
              <li>Confirm mileage limits</li>
            </ul>
          </div>

          <div className="section">
            <h3>4. Final Verdict</h3>
            <p className="verdict">⚠️ Medium Risk Contract</p>
          </div>

        </div>
      )}

    </div>
  );
>>>>>>> 2df88c05edbcd7bfc1840233159724fd1fcbd7e9
}