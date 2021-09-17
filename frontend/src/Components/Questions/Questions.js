import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import {
  getQuestions,
  postResult,
  getQuiz,
} from "../../Services/ServiceMethods";
import { getUserMeApi } from "../../Services/UserServiceMethods";
import Question from "./Question";
const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);
  const [trueAnswers, SetTrueAnswers] = useState([]);
  const [timer, setTimer] = useState(null);
  const [user, setUser] = useState(null);
  const { addToast } = useToasts();
  const quizid = Number(props.match.params.quizid);
  useEffect(() => {
    const token = localStorage.getItem("token");
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
    getUserMeApi(token).then((res) => {
      setUser(res.data);
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
  const converSecondToMinute = (value) => {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - hours * 3600) / 60);
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };
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
    const result = {
      score: calculateResult(),
      contributor: user.id,
      quiz: quizid,
    };
    postResult(result);
    addToast("برای دیدن نتیجه آزمون به بخش نتایج آزمون بروید", {
      appearance: "success",
      autoDismiss: true,
    });
    props.history.push("/");
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
            <span className="text-red-500">{converSecondToMinute(timer)}</span>
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
