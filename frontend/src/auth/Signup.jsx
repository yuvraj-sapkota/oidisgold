import { Book, Mail, Lock, User } from "lucide-react";
import HeadingOIG from "../components/Logo";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [backendUserData, setbackendUserData] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(authData);
    setAuthData(initialState);
    // api implementation here
    const response = async () => {
      try {
        const userData = await axios.post(
          "http://localhost:8000/api/auth/signup",
          authData
        );
        setbackendUserData(userData.data);
        console.log("singup data coming from backend ", userData.data);
      } catch (error) {
        console.log(error);
      }
    };

    response();
  };
  return (
    <>
      <div className="min-h-screen bg-[#F5F6F7] flex items-center justify-center p-4 flex-col">
        <div className=" w-full max-w-md">
          <HeadingOIG />
        </div>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-customBlue p-3 rounded-full mb-4">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-customBlue">
              Welcome to Sign up Page
            </h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="name"
                  value={authData.name}
                  onChange={handleInput}
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2D3B45] focus:border-[#2D3B45] sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="email"
                  value={authData.email}
                  onChange={handleInput}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2D3B45] focus:border-[#2D3B45] sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="password"
                  value={authData.password}
                  onChange={handleInput}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2D3B45] focus:border-[#2D3B45] sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customBlue hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-[#2D3B45] hover:text-[#3D4D59] ml-2"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
