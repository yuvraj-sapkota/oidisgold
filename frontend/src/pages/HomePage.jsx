import { useState } from "react";
import LeftSidebar from "../Layout/HomePage/LeftsideBar";
import RightSideContent from "../Layout/HomePage/RightSideContent";
import { Menu } from "lucide-react"; // or use AiOutlineMenu from 'react-icons/ai'

const HomePage = () => {
  const [activeSemesterId, setActiveSemesterId] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="flex relative min-h-screen">
        {/* Mobile Menu Icon */}
        {showSidebar ? (
          <div className="absolute top-4 left-55 text-white md:hidden z-50 ">
            <button onClick={toggleSidebar}>
              <Menu size={25} />
            </button>
          </div>
        ) : (
          <div className="absolute top-4 left-4 md:hidden z-50 ">
            <button onClick={toggleSidebar}>
              <Menu size={28} />
            </button>
          </div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full z-40 bg-white shadow-md transition-transform duration-300 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:block`}
        >
          <LeftSidebar setActiveSemesterId={setActiveSemesterId} />
        </div>

        {/* Right Content */}
        <div className="flex-1 mt-10 md:mt-0  ml-0 md:ml-0">
          <div className="bg-customBlue w-full p-2  flex items-center justify-between">
            <p className="font-bold text-white text-xl">Welcome Yuvraj</p>
            <button
              onClick={handleLogout}
              className="bg-white  rounded-full px-2 py-1"
            >
              Log out
            </button>
          </div>
          <RightSideContent activeSemesterId={activeSemesterId} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
