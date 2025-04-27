import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import wt from "../assets/wt1.jpg";

const QuestionsPage = () => {
  const questionImage = [
    {
      name: "english",
      year: 2018,
      season: "fall",
      imageUrl: wt,
    },
    {
      name: "math",
      year: 2016,
      season: "fall",
      imageUrl: wt,
    },
    {
      name: "math",
      year: 2016,
      season: "fall",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcH6lSLwRVWhY1yqYLZgCZC7ucYh-LtBmRkI7UhQFGNQw9ycDe9Bm9HNFczpOt_ir4jw&usqp=CAU",
    },
    {
      name: "math",
      year: 2016,
      season: "fall",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcH6lSLwRVWhY1yqYLZgCZC7ucYh-LtBmRkI7UhQFGNQw9ycDe9Bm9HNFczpOt_ir4jw&usqp=CAU",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full md:w-[40%] bg-customBlue rounded px-4 py-4 flex items-center justify-between z-10">
        <h1 className="text-white font-bold">Course: Web Technologies II</h1>
      </div>

      {/* Questions Section */}
      <div className="pt-20 h-screen md:w-[40%] w-full overflow-auto mx-auto">
        {questionImage.map((curElem, index) => (
          <div key={index} className="w-full mb-6">
            <p className="text-base font-semibold mb-2">
              {curElem.year} {curElem.season}
            </p>

            <div className="w-full h-[500px] overflow-hidden rounded border relative bg-black">
              <TransformWrapper
                defaultScale={1}
                defaultPositionX={0}
                defaultPositionY={0}
                minScale={1}
                maxScale={5}
                wheel={{ disabled: true }} // (disable mouse scroll zoom)
                panning={{ velocityDisabled: true }} // allow panning
                doubleClick={{ disabled: true }} // disable double click zoom
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
                        src={curElem.imageUrl}
                        alt=""
                        className="w-full h-full object-fill cursor-grab active:cursor-grabbing"
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionsPage;
