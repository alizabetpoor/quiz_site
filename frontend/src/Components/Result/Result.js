import { useEffect, useState } from "react";
import { getQuiz } from "../../Services/ServiceMethods";
import "./Result.css";
const Result = (props) => {
  const [quiz, setQuiz] = useState(null);
  useEffect(() => {
    getQuiz(props.quiz).then((res) => {
      setQuiz(res.data);
    });
  }, [props.quiz]);

  return (
    <>
      {quiz ? (
        <div
          className={`result flex flex-col justify-around ${
            props.score >= quiz.required_score
              ? "border-green-600"
              : "border-red-600"
          } 
        items-stretch border-2 rounded-lg p-2 h-32 bg-purple-100`}
        >
          <div className="flex justify-between">
            <h3>{quiz.title}</h3>
            <p>حداقل نمره قبولی:{quiz.required_score}%</p>
          </div>
          <div className="flex justify-between">
            <p
              className={`${
                props.score >= quiz.required_score
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              نمره کسب شده:{props.score}%
            </p>
            {props.score >= quiz.required_score ? (
              <p className="text-green-600">شما قبول شدید</p>
            ) : (
              <p className="text-red-600">شما رد شدید</p>
            )}
          </div>
        </div>
      ) : (
        <p>loading ... </p>
      )}
    </>
  );
};

export default Result;
