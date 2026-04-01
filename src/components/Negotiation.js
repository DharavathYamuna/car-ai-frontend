import React, { useState } from "react";
import "./Negotiation.css";

function Negotiation() {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState("email");
  const [output, setOutput] = useState("");

  const generateContent = () => {
    if (!input) {
      setOutput("Please enter your concern.");
      return;
    }

    const isTelugu = input.toLowerCase().includes("telugu");
    const cleanInput = input.replace(/telugu/gi, "");

    if (format === "email") {
      if (isTelugu) {
        setOutput(`
విషయం: లీజ్ నిబంధనలపై సమీక్ష అభ్యర్థన

మహోదయుడు / మహోదయి గారికి,

మీరు క్షేమంగా ఉన్నారని ఆశిస్తున్నాను.

నా వాహన లీజ్ ఒప్పందానికి సంబంధించి కొన్ని సమస్యలు ఉన్నాయి. ముఖ్యంగా, ${cleanInput}.

దయచేసి ఈ విషయాన్ని పరిగణనలోకి తీసుకొని, మంచి మార్పులు చేయాలని మనవి.

మీ సహకారం కోసం ధన్యవాదాలు.

భవదీయులు,  
[మీ పేరు]
        `);
      } else {
        setOutput(`
Subject: Request for Review of Lease Terms

Dear Sir/Madam,

I hope you are doing well.

I would like to discuss some concerns regarding my vehicle lease agreement. Specifically, ${cleanInput}.

I kindly request you to review these terms and consider providing a more favorable adjustment.

Thank you.

Sincerely,  
[Your Name]
        `);
      }
    } else {
      if (isTelugu) {
        setOutput(`
చర్చించవలసిన ముఖ్యాంశాలు:

• మీ సమస్యను స్పష్టంగా చెప్పండి: ${cleanInput}
• ధర తగ్గించమని అడగండి
• అదనపు ఛార్జీల గురించి వివరాలు అడగండి
• ఇతర ఆఫర్లతో పోల్చండి
• మర్యాదగా కానీ ధైర్యంగా మాట్లాడండి
• అవసరమైతే ఒప్పందం వదిలేయడానికి సిద్ధంగా ఉండండి
        `);
      } else {
        setOutput(`
Negotiation Talking Points:

• Clearly explain your concern: ${cleanInput}
• Ask for cost reduction or better terms
• Request clarification on hidden charges
• Compare with other offers
• Stay polite but confident
• Be ready to walk away if needed
        `);
      }
    }
  };

  return (
    <div className="negotiation-container">
      <h1>✍️ Negotiation Helper</h1>
      <p>Generate a negotiation email or talking points based on your concerns.</p>

      <textarea
        placeholder="Enter your concern (type 'telugu' for Telugu output)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="format">
        <label>
          <input
            type="radio"
            checked={format === "email"}
            onChange={() => setFormat("email")}
          />
          Negotiation Email
        </label>

        <label>
          <input
            type="radio"
            checked={format === "points"}
            onChange={() => setFormat("points")}
          />
          Talking Points
        </label>
      </div>

      <button onClick={generateContent}>
        ✨ Generate Negotiation Content
      </button>

      {output && (
        <div className="output-box">
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}

export default Negotiation;