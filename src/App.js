import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";
import Analysis from "./components/Analysis";
import Chat from "./components/Chat";
import Vin from "./components/Vin";
import Negotiation from "./components/Negotiation";
import Compare from "./components/Compare";
import MyHistory from "./components/MyHistory";
import Analytics from "./components/Analytics";

import "./App.css";

function App() {
  const [page, setPage] = useState("upload");

  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <div className="main">
        {page === "upload" && <Upload />}
        {page === "analysis" && <Analysis />}
        {page === "chat" && <Chat />}
        {page === "vin" && <Vin />}
        {page === "negotiation" && <Negotiation />}
        {page === "compare" && <Compare />}
        {page === "history" && <MyHistory />}      {/* ✅ FIX */}
        {page === "analytics" && <Analytics />}    {/* ✅ FIX */}
      </div>
    </div>
  );
}

export default App;