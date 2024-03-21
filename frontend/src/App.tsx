import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserSession } from "./types/types";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    const userJSON = window.localStorage.getItem("userSession");
    if (userJSON) {
      setUserSession(JSON.parse(userJSON));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Login setUserSession={setUserSession} userSession={userSession} />
          }
        />
        <Route path="/register" element={<Register userSession={userSession}/>} />
        <Route
          path="/home"
          element={
            <Home userSession={userSession} setUserSession={setUserSession} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
