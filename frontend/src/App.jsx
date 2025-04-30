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
import QuestionsPage from "./pages/Questionspage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./pages/ProtectedRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* these are the public routes */}
          <Route path="/" element={<Logout />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* these are the protected routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="home" element={<HomePage />} />
            <Route path="adminPage" element={<AdminPage />} />
            <Route path="questions" element={<QuestionsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
