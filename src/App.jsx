import { useState, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Canvas from "./components/canvas/Canvas";

function App() {
  const [blocks, setBlocks] = useState(() => {
    const saved = localStorage.getItem("blocks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
      <Navbar />
      <div className="flex pt-14">
        <Sidebar setBlocks={setBlocks} />
        <Canvas blocks={blocks} setBlocks={setBlocks} />
      </div>
    </div>
  );
}

export default App;
