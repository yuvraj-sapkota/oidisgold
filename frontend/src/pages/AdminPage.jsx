import { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [data, setData] = useState({
    semester: "",
    subjectName: "",
    year: "",
    season: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      // First create the semester
      const semesterRes = await axios.post(
        "http://localhost:8000/api/semesters",
        {
          name: data.semester,
        }
      );
      console.log("Response coming from backend", semesterRes);
      const semesterId = semesterRes.data._id;

      // Create the subject
      const subjectRes = await axios.post(
        "http://localhost:8000/api/subjects",
        {
          name: data.subjectName,
          semester: semesterId,
        }
      );
      console.log("Subject name from backend", subjectRes);
      const subjectId = subjectRes.data._id;

      // Prepare the FormData object
      const formData = new FormData();
      formData.append("subject", subjectId);
      formData.append("year", data.year);
      formData.append("season", data.season);
      formData.append("image", data.image);

      // Log FormData
      formData.forEach((value, key) => {
        console.log("form data is unique", key, value); // This will print the key and the value
      });

      // Submit the question with FormData
      const questionRes = await axios.post(
        "http://localhost:8000/api/questions",
        formData
      );
      console.log("Question from the backend", questionRes);
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        className="bg-white shadow-xl rounded-2xl p-8 space-y-6 w-full max-w-md"
        onSubmit={handleSumbit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Question Details
        </h2>

        <div className="space-y-1">
          <label className="block text-gray-600 font-medium">Semester</label>
          <input
            type="text"
            placeholder="Enter semester"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="semester"
            value={data.semester}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600 font-medium">
            Subject Name
          </label>
          <input
            type="text"
            placeholder="Enter subject name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="subjectName"
            value={data.subjectName}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600 font-medium">Year</label>
          <input
            type="text"
            placeholder="Enter year"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="year"
            value={data.year}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600 font-medium">Season</label>
          <input
            type="text"
            placeholder="Enter season"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="season"
            value={data.season}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-gray-600 font-medium">Image</label>
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="photo"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-customBlue text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
