import { useState } from "react";
import { Link } from "react-router-dom";


const MiddleContent = ({ semNumber }) => {
  const [selectSem, setSelectSem] = useState();

  // staticData.js (or dummy inside the same file for demo)

 const semesters = {
  Semester1: [
    {
      subject_id: "sub101",
      subjectName: "Mathematics I",
    },
    {
      subject_id: "sub102",
      subjectName: "Computer Fundamentals",
    },
  ],
  Semester2: [
    {
      subject_id: "sub201",
      subjectName: "Discrete Mathematics",
    },
    {
      subject_id: "sub202",
      subjectName: "Programming in C",
    },
  ],
  // Add more semesters if needed...
};


  const handleSelectSem = (idx) => {
    setSelectSem(idx);
    console.log("the subject id is ", idx);
  };

  const semesterKey = "Semester" + semNumber;
  console.log(semesterKey);
  return (
    <>
      <main className="flex-1 overflow-auto ">
        <div className="m-4 text-2xl font-semibold text-center text-customBlue">
          <p>Subjects of {semNumber} Semester</p>
        </div>
        <div className="max-w-3xl mx-auto ">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {semesters[semesterKey]?.map((curElem) => {
              return (
                <Link
                  to={`/displayquestions?subjectId=${curElem.subject_id}&semesterKey=${semesterKey}`}
                  key={curElem.subject_id}
                >
                  <div
                    onClick={() => handleSelectSem(curElem.subject_id)}
                    className="border border-gray-500 w-[280px] h-[160px] p-2 rounded-xl hover:shadow-lg hover:scale-105 duration-200"
                  >
                    <h4 className="font-bold text-2xl text-center">
                      {curElem.subjectName}
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
