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
      <div className="fixed bg-customBlue w-full md:w-[40%] rounded px-4 py-4 flex items-center justify-between">
        <h1 className=" text-white font-bold">Course: Web Technologies II</h1>
       
      </div>
      <div className="h-screen pt-16  md:w-[40%] overflow-auto">
        {questionImage.map((curElem, index) => (
          <div key={index} className="w-full   h-[500px] overflow-hidden ">
            <p>
              {curElem.year} {curElem.season}
            </p>
           <div className="">
            
           <img
              src={curElem.imageUrl}
              alt=""
              className="w-[100%] h-[100%] object-fill "
            />
            sd
           </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionsPage;
