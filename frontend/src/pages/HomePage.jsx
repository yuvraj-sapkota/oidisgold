import { useState } from "react";
import LeftSidebar from "../Layout/HomePage/LeftsideBar";
import RightSideContent from "../Layout/HomePage/RightSideContent";

const HomePage = () => {
  const [activeSemesterId, setActiveSemesterId] = useState("");

  console.log("Active semester id is ", activeSemesterId);
  return (
    <>
      <div className="flex">
        <LeftSidebar setActiveSemesterId={setActiveSemesterId} />
        <RightSideContent activeSemesterId={activeSemesterId} />
      </div>
    </>
  );
};
export default HomePage;
