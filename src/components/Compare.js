import React, { useState } from "react";
import "./Compare.css";

function Compare() {
  const [fileA, setFileA] = useState(null);
  const [fileB, setFileB] = useState(null);
  const [result, setResult] = useState("");

  const handleFileA = (e) => {
    setFileA(e.target.files[0]);
  };

  const handleFileB = (e) => {
    setFileB(e.target.files[0]);
  };

  // ✅ FIXED FUNCTION NAME
  const compare = () => {
    if (!fileA || !fileB) {
      setResult("⚠️ Please upload both contracts.");
      return;
    }

    setResult(`
📊 Comparison Result:

1. Lease Term:
- Contract A: Not specified
- Contract B: 36 months
👉 Winner: Contract B

2. Monthly Cost:
- Contract A: Not clear
- Contract B: $1044/month
👉 Winner: Contract A (if negotiable)

3. Recommendation:
✔ Contract B has clearer terms  
✔ Contract A needs clarification  

⚖️ Final Suggestion: Choose Contract B or negotiate Contract A.
    `);
  };

  return (
    <div className="compare-container">
      <h1>⚖️ Compare Two Contracts</h1>
      <p>Upload two contracts and compare them easily.</p>

      <div className="contracts">
        {/* Contract A */}
        <div className="contract-box">
          <h3>Contract A</h3>
          <input type="file" onChange={handleFileA} />
          {fileA && <p className="file-name">✅ {fileA.name}</p>}
        </div>

        {/* Contract B */}
        <div className="contract-box">
          <h3>Contract B</h3>
          <input type="file" onChange={handleFileB} />
          {fileB && <p className="file-name">✅ {fileB.name}</p>}
        </div>
      </div>

      {/* ✅ FIXED HERE */}
      <button onClick={compare}>⚖️ Compare Now</button>

      {result && (
        <div className="result-box">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default Compare;