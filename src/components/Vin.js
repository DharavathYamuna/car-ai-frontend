import React, { useState } from "react";
import "./Vin.css";

function Vin() {
  const [vin, setVin] = useState("");
  const [data, setData] = useState(null);

  const handleLookup = () => {
    if (vin.length !== 17) {
      alert("Enter valid 17 character VIN");
      return;
    }

    // 🔥 Dummy data (same like your image)
    setData({
      vehicle: "2006 HONDA Civic LX",
      body: "Sedan/Saloon",
      engine: "1.8L",
      cylinders: "4",
      fuel: "Gasoline",
      transmission: "Automatic",
      doors: "4",
      assembly: "JAPAN",
      recalls: [
        {
          title: "AIR BAGS: FRONTAL",
          summary:
            "Honda is recalling certain vehicles due to airbag issues.",
          consequence:
            "Airbag may deploy improperly increasing risk of injury.",
        },
        {
          title: "EQUIPMENT: OTHER",
          summary: "Some equipment may fail.",
          consequence: "May cause safety risks.",
        },
      ],
    });
  };

  return (
    <div className="vin-container">
      <h1>🔑 VIN Lookup</h1>
      <p>Look up any vehicle using its 17-character VIN.</p>

      {/* INPUT */}
      <input
        type="text"
        maxLength="17"
        placeholder="Enter VIN (17 characters)"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />

      <button onClick={handleLookup}>🔍 Look Up VIN</button>

      {/* RESULT */}
      {data && (
        <div className="vin-result">
          <h2>🚗 {data.vehicle}</h2>

          <div className="grid">
            <div><b>Body:</b> {data.body}</div>
            <div><b>Engine:</b> {data.engine}</div>
            <div><b>Cylinders:</b> {data.cylinders}</div>
            <div><b>Fuel:</b> {data.fuel}</div>
            <div><b>Transmission:</b> {data.transmission}</div>
            <div><b>Doors:</b> {data.doors}</div>
            <div><b>Assembly:</b> {data.assembly}</div>
          </div>

          {/* RECALLS */}
          <h3>⚠️ Recalls</h3>
          {data.recalls.map((recall, i) => (
            <div key={i} className="recall-card">
              <h4>{recall.title}</h4>
              <p><b>Summary:</b> {recall.summary}</p>
              <p><b>Consequence:</b> {recall.consequence}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Vin;