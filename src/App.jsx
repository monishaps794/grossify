import { useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AppRoutes searchTerm={searchTerm} />
    </>
  );
}

export default App;