import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MiddleContent = ({ activeSemesterId }) => {
  const [subject, setSubject] = useState([]);
  const [semesterId, setSemesterId] = useState(
    activeSemesterId || localStorage.getItem("semesterId") || ""
  );

  // const semesterId = activeSemesterId;

  useEffect(() => {
    // Update semesterId if it changes from props
    if (activeSemesterId) {
      setSemesterId(activeSemesterId);
      localStorage.setItem("semesterId", activeSemesterId);
    }
  }, [activeSemesterId]);

  useEffect(() => {
    // if (!activeSemesterId) return;

    const fetchSubject = async () => {
      const subjectResponse = await axios.get(
        `http://localhost:8000/api/subjects/${semesterId}`
      );
      setSubject(subjectResponse.data);
      console.log(
        "Subjects coming from backend aaaaaaaaaaaaa is ",
        subjectResponse.data
      );
    };

    fetchSubject();
    console.log("Subjects coming from backend is ", subject);
  }, [semesterId]);
  return (
    <>
      <main className="flex-1 overflow-auto ">
        {semesterId ? (
          <div className="m-4 text-2xl font-semibold text-center text-customBlue">
            <p>Subjects of {"--"} Semester</p>
          </div>
        ) : (
          ""
        )}
        <div className="max-w-3xl mx-auto ">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {subject.map((curElem, index) => {
              return (
                <Link
                  to={`/displayquestions?subjectId=${
                    curElem.subject_id
                  }&semesterKey=${""}`}
                  key={index}
                >
                  <div className="border border-gray-500 w-[280px] h-[160px] p-2 rounded-xl hover:shadow-lg hover:scale-105 duration-200">
                    <h4 className="font-bold text-2xl text-center">
                      {curElem.name}
                    </h4>
                    <button>open question</button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MiddleContent;
