import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>🚗 CarLease AI</h2>

      <p onClick={() => setPage("upload")}>📄 Upload & Extract</p>
      <p onClick={() => setPage("analysis")}>📊 Analysis</p>
      <p onClick={() => setPage("chat")}>💬 Chat Assistant</p>
      <p onClick={() => setPage("vin")}>🔑 VIN Lookup</p>
      <p onClick={() => setPage("negotiation")}>✍️ Negotiation Helper</p>
      <p onClick={() => setPage("compare")}>⚖️ Compare Contracts</p>

      {/* ✅ FIX HERE */}
      <p onClick={() => setPage("history")}>📁 My History</p>
      <p onClick={() => setPage("analytics")}>📊 Analytics</p>
    </div>
  );
}

export default Sidebar;