import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import AdminPage from "./pages/AdminPage";

import Layout from "./Layout";
import Signup from "./auth/Signup";
import HomeHero from "./Layout/LogoutPage/LogoutContent";
import HeadingOIG from "./components/Logo";
import Logout from "./pages/Logout";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<HomePage />} />
            <Route path="adminPage" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
