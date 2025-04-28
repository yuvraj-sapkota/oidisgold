import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const QuestionsPage = () => {
  const [searchParams] = useSearchParams();
  const subjectId = searchParams.get("subjectId");

  console.log("subject id is", subjectId);
  const [questionDetails, setQuestionDetails] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const questionsResponse = await axios.get(
          `http://localhost:8000/api/questions/${subjectId}`
        );
        setQuestionDetails(questionsResponse.data);
        console.log(
          "questions coming from backend is ",
          questionsResponse.data
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestion();
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed mx-auto w-full  bg-customBlue rounded px-4 py-4 flex items-center justify-between z-50">
        <h1 className="text-white font-bold text-lg text-center w-full z-50">
          Course: Web Technologies I
        </h1>
      </div>

      {/* Questions Section */}
      <div className="pt-20 h-screen overflow-y-auto mx-auto w-full md:w-[40%] flex flex-col items-center">
        <div className="w-full flex flex-col items-center space-y-6 px-2">
          {questionDetails.map((curElem, index) => (
            <div key={index} className="w-full">
              {/* Year and Season */}
              <p className="text-center text-base font-semibold mb-2">
                {curElem.year} {curElem.season}
              </p>

              {/* Image Container with Zoom */}
              <div className="w-full overflow-hidden rounded border border-gray-400 bg-black relative">
                <TransformWrapper
                  defaultScale={1}
                  minScale={1}
                  maxScale={5}
                  wheel={{ disabled: true }}
                  panning={{ velocityDisabled: true }}
                  doubleClick={{ disabled: true }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      {/* Zoom Buttons */}
                      <div className="absolute top-2 right-2 flex space-x-2 z-10">
                        <button
                          onClick={() => zoomIn()}
                          className="bg-white text-black px-2 py-1 rounded shadow hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => zoomOut()}
                          className="bg-white text-black px-2 py-1 rounded shadow hover:bg-gray-300"
                        >
                          -
                        </button>
                        <button
                          onClick={() => resetTransform()}
                          className="bg-white text-black px-2 py-1 rounded shadow hover:bg-gray-300"
                        >
                          Reset
                        </button>
                      </div>

                      {/* Image */}
                      <TransformComponent>
                        <img
                          src={curElem.image}
                          alt="question"
                          className="w-full object-contain cursor-grab active:cursor-grabbing"
                        />
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
