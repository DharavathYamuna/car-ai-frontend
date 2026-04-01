<<<<<<< HEAD
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

=======
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

>>>>>>> 2df88c05edbcd7bfc1840233159724fd1fcbd7e9
export default Sidebar;