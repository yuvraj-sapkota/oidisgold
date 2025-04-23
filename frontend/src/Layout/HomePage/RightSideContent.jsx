import axios from "axios";
import { useEffect, useState } from "react";

const RightSideContent = () => {
  const [subject, setSubject] = useState([]);
  const idNumber = "68052d39a0cebc3d6a567251";
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/subjects/semester/ ${idNumber}`
        );
        setSubject(response.data);
        console.log("Subject getting from the backends are", response.data);
      } catch (error) {
        console.log("Error while fetching subjects", error);
      }
    };
    fetchSubjects();
  }, []);

  return <></>;
};

export default RightSideContent;
