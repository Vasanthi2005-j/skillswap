import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Exchange from "./pages/Exchange";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="main-container">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/exchange"
            element={<Exchange />}
          />

          <Route
            path="/chat"
            element={<Chat />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;