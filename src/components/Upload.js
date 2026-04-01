import React, { useState } from "react";
import "./Upload.css";

function Upload({ contractText, setContractText }) {
  const [file, setFile] = useState(null);
  const [showText, setShowText] = useState(false);
  const [extracted, setExtracted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // ✅ FIXED: Backend Connection
  const handleExtract = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://car-lease-backend-3.onrender.com/extract", // ✅ IMPORTANT
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      setContractText(data.text || "No text received");
      setShowText(true);
    } catch (error) {
      console.error(error);
      alert("Error extracting contract");
    }
  };

  // STEP 2 → Extract Key Terms
  const handleKeyExtraction = () => {
    setExtracted(true);
  };

  return (
    <div className="upload-container">
      {/* LEFT SIDE */}
      <div className="left-panel">
        <h1>📄 Upload Contract</h1>

        {/* Upload Box */}
        <div className="upload-box">
          <input type="file" onChange={handleFileChange} />
        </div>

        {/* File Name */}
        {file && <div className="file-name">{file.name}</div>}

        {/* Extract Button */}
        <button onClick={handleExtract} className="btn">
          Extract
        </button>

        {/* Contract Text */}
        {showText && (
          <>
            <h3
              className="view-text"
              onClick={() => setShowText(!showText)}
            >
              View Contract Text {showText ? "▲" : "▼"}
            </h3>

            <div className="contract-text-box">
              {contractText}
            </div>

            <button onClick={handleKeyExtraction} className="btn">
              🔍 Extract Key Terms & SLA
            </button>
          </>
        )}

        {/* Success Message */}
        {extracted && (
          <div className="success">
            ✅ Extraction complete — saved to MySQL!
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      {extracted && (
        <div className="right-panel">
          <h2>📊 Extracted Terms</h2>

          <div className="card">Fairness Score: --</div>
          <div className="card">Monthly Payment: $300</div>
          <div className="card">APR / Interest: 8%</div>
          <div className="card">Lease Term: 36 months</div>

          <div className="json-box">
            <h4>Full JSON Output</h4>
            <pre>
{`{
  "apr": "8%",
  "monthly_payment": "$300",
  "lease_term": "36",
  "fees": ["late fee", "acquisition fee"]
}`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;