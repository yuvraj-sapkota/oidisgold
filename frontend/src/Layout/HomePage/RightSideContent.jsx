import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MiddleContent = ({ activeSemesterId }) => {
  const [subject, setSubject] = useState([]);
  const [semesterId, setSemesterId] = useState(
    activeSemesterId || localStorage.getItem("semesterId") || ""
  );

  useEffect(() => {
    if (activeSemesterId) {
      setSemesterId(activeSemesterId);
      localStorage.setItem("semesterId", activeSemesterId);
    }
  }, [activeSemesterId]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchSubject = async () => {
      try {
        const subjectResponse = await axios.get(
          `http://localhost:8000/api/subjects/${semesterId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSubject(subjectResponse.data);
        console.log("subject coming from backend is ", subjectResponse.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    if (semesterId) {
      fetchSubject();
    }
  }, [semesterId]);

  return (
    <>
      {semesterId ? (
        <main className="flex-1 overflow-auto px-4 md:px-8 py-6">
          {semesterId && subject.length > 0 && (
            <div className="text-xl sm:text-2xl font-semibold text-center text-customBlue mb-6">
              <p>Subjects of {subject[0]?.semester?.name} </p>
            </div>
          )}

          <div className="px-4 py-6 mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subject.map((curElem, index) => (
                <Link
                  to={`/questions?subjectId=${curElem._id}`}
                  key={index}
                  className="w-full"
                >
                  <div className="border border-gray-300 h-40 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-200 bg-white flex flex-col justify-between">
                    <h4 className="font-bold text-xl text-center">
                      {curElem.name}
                    </h4>
                    <div className="flex justify-center">
                      <button className="bg-customBlue text-white px-4 py-1 rounded hover:text-black transition-colors duration-200">
                        Open Questions
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      ) : (
        <div>
          <h1 className="text-center font-bold text-6xl mt-4 tracking-tight h-screen flex justify-center items-center">
            Please select <br /> your semester
          </h1>
        </div>
      )}
    </>
  );
};

export default MiddleContent;
