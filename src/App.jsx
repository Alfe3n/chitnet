import "./App.css";
import Login from "./pages/login";
import Notfound from "./pages/notfound";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import PubliChitFund from "./pages/public";
import NewChitFund from "./pages/newchitfund";
import Bookmark from "./pages/bookmark";
import { Route, Routes } from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails";
import ChitHistory from "./components/ChitHistory";
import DocsSubmitted from "./components/DocsSubmitted";
import PaymentHistory from "./components/PaymentHistory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="profile" element={<Profile />}>
          <Route index path="personal-details" element={<PersonalDetails />} />
          <Route path="chit-history" element={<ChitHistory />} />
          <Route path="docs-submitted" element={<DocsSubmitted />} />
          <Route path="payment-history" element={<PaymentHistory />} />
        </Route>
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="public" element={<PubliChitFund />} />
        <Route path="newchit" element={<NewChitFund />} />,
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
