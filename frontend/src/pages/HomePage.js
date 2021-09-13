import { useState, useEffect } from "react";
import QuizList from "../Components/QuizList/QuizList";
import { getQuiz } from "../Services/ServiceMethods";
const HomePage = () => {
  const [quizes, setQuizes] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getQuiz()
      .then((res) => {
        setQuizes(res.data);
      })
      .catch(() => setError(true));
  }, []);
  return (
    <>
      {!error ? (
        <QuizList quizes={quizes} />
      ) : (
        <p className="bg-yellow-200 text-red-500 my-4 p-8 rounded-lg font-bold">
          مشکل در ارتباط با سرور
        </p>
      )}
    </>
  );
};

export default HomePage;
