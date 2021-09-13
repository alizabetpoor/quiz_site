import { useEffect, useState } from "react";
import {
  getQuestions,
  postResult,
  getQuiz,
} from "../../Services/ServiceMethods";
import Question from "./Question";
const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [trueAnswers, SetTrueAnswers] = useState([]);
  const [timer, setTimer] = useState(null);
  const quizid = Number(props.match.params.quizid);
  useEffect(() => {
    getQuestions(quizid)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
    getQuiz(quizid).then((res) => {
      setTimer(res.data.time_quiz * 60);
    });
  }, [quizid]);
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval);
        submitQuiz();
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  const calculateResult = () => {
    const result = (trueAnswers.length / questions.length) * 100;
    return result;
  };
  const addToTrueAnswers = (idquestion, idanswer) => {
    const findAnswer = trueAnswers.find(
      (answer) => answer.idquestion === idquestion
    );
    if (!findAnswer) {
      SetTrueAnswers([
        ...trueAnswers,
        { idquestion: idquestion, idanswer: idanswer },
      ]);
    }
  };
  const deleteFromTrueAnswers = (idquestion) => {
    const filterAnswer = trueAnswers.filter(
      (answer) => answer.idquestion !== idquestion
    );
    SetTrueAnswers(filterAnswer);
  };
  const submitQuiz = () => {
    const result = { score: calculateResult(), contributor: 1, quiz: quizid };
    console.log(result);
    props.history.push("/");

    // postResult()
  };
  const mapQeustions = () => {
    let render = null;
    render = questions.map((question) => {
      return (
        <Question
          key={question.id}
          question={question}
          addToTrueAnswers={addToTrueAnswers}
          deleteFromTrueAnswers={deleteFromTrueAnswers}
        />
      );
    });
    return render;
  };
  return (
    <div className="questions w-3/5 my-4 space-y-3 ">
      {questions.length ? (
        <div>
          <p>
            تایم باقیمانده از آزمون :{" "}
            <span className="text-red-500">{timer}</span>
          </p>
        </div>
      ) : null}
      {!error ? mapQeustions() : <p>مشکل در ارتباط با سرور</p>}
      {questions.length ? (
        <button
          onClick={submitQuiz}
          className="bg-green-500 hover:bg-white hover:text-green-500 ring ring-green-300 p-2 rounded-xl"
        >
          اتمام آزمون
        </button>
      ) : null}
    </div>
  );
};

export default Questions;
