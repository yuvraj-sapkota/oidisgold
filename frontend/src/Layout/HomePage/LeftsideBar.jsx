import { Book, ChevronDown, Play } from "lucide-react";
import Logo from "../../components/Logo";
import { useEffect, useState } from "react";
import axios from "axios";

const LeftSidebar = ({ setActiveSemesterId }) => {
  const [sem, setSem] = useState([]);
  const [isSemester, setIsSemester] = useState(true);
  const [activeSemester, SetActiveSemester] = useState();

  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/semesters");
        setSem(response.data);
        console.log("Semester coming from backend is", response.data);
      } catch (error) {
        console.log("Error fetching semester", error);
      }
    };
    fetchSemester();
  }, []);

  const knowSemester = (id) => {
    SetActiveSemester(id);
    console.log("active semester", id);
    setActiveSemesterId(id);
  };

  console.log("active semester", activeSemester);
  return (
    <>
      {/* Left Sidebar */}
      <div className="w-64 bg-[#2D3B45] text-white h-screen">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Book className="w-5 h-5" />
            <span className="font-medium">
              <Logo />
            </span>
          </div>
        </div>
        <hr className="bg-white text-white border m-4 -mt-3" />
        <div className="px-2">
          <div className="mb-4">
            <div className="flex items-center justify-between p-2 ">
              <div
                className="flex items-center gap-2 justify-center "
                onClick={() => setIsSemester(!isSemester)}
              >
                <ChevronDown
                  className={`w-4 h-4 cursor-pointer transition duration-200 ${
                    isSemester ? "" : "-rotate-90"
                  }
                  }`}
                />
                <span className="text-sm cursor-pointer">Semester</span>
              </div>
            </div>
            {/* all semester */}
            {isSemester && (
              <div className="ml-6 space-y-2">
                {sem.map((curElem) => (
                  <div
                    key={curElem._id}
                    onClick={() => knowSemester(curElem._id)}
                    className={`flex items-center justify-between p-2 bg-[#3D4D59] hover:bg-[#42515b] hover:scale-105 will-change-transform duration-200 transition rounded cursor-pointer   ${
                      activeSemester == curElem._id ? "bg-customBlue scale-105" : ""
                    }
                     
                    }`}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <span className="text-sm">
                        <Play size={15} />
                      </span>
                      <span className="text-sm tracking-wider">
                        {curElem.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
