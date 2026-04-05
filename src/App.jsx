import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Canvas from "./components/canvas/Canvas";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex pt-14">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
