import { ReactTyped } from "react-typed";
const LogoutContent = () => {
  return (
    <>
      <div className="max-w-[1200px] h-[600px] object-cover mx-auto ">
        <div className="max-w-[100%] w-[1200px] bg-[url('./assets/herobgImage.jpg')] h-[100%] bg-cover p-1">
          <div>
            <div className="text-center mt-28 ">
              <ReactTyped
                strings={[" Old Is Gold: Your Exam Companion"]}
                className="text-center text-xl sm:text-3xl md:text-5xl font-bold text-white"
                typeSpeed={40}
                showCursor={false}
              />
              <br />

              <div className="mt-6">
                <ReactTyped
                  strings={[" A hub to explore, prepare, connect and "]}
                  className=" text-center text-[14px] md:text-lg text-white font-medium"
                  showCursor={false}
                />
              </div>
              <ReactTyped
                strings={["search questions", "chat with friends", "succeed"]}
                className=" mt-6 text-center text-[14px] md:text-lg text-white font-medium ml-2"
                typeSpeed={40}
                backSpeed={50}
                loop
              >
                <input type="text" className="bg-transparent" />
              </ReactTyped>
            </div>
          </div>
          <div className="text-center">
            <button className="px-6 sm:px-12 md:px-16 py-2 bg-customBlue text-white font-bold rounded-lg mt-8">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* <div className="border border-blue-500 h-screen"></div> */}
    </>
  );
};

export default LogoutContent;
