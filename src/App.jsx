import "./App.css";
import Login from "./pages/login";
import Notfound from "./pages/notfound";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import PubliChitFund from "./pages/public";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="public" element={<PubliChitFund />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
