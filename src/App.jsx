import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Canvas from "./components/canvas/Canvas";

function App() {
  const [blocks, setBlocks] = useState([]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex pt-14">
        <Sidebar setBlocks={setBlocks} />
        <Canvas blocks={blocks} setBlocks={setBlocks} />
      </div>
    </div>
  );
}

export default App;
