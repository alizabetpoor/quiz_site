import { useEffect, useState } from "react";
import { getAnswers } from "../../Services/ServiceMethods";
const Question = ({ question, addToTrueAnswers, deleteFromTrueAnswers }) => {
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [trueAnswer, setTrueAnswer] = useState(null);
  const [error, setError] = useState(false);
  const submitAnswer = (e) => {
    e.preventDefault();
    setSelected(e.target.answer.value);
    if (e.target.answer.value == trueAnswer) {
      addToTrueAnswers(question.id, trueAnswer);
    } else {
      deleteFromTrueAnswers(question.id);
    }
  };
  useEffect(() => {
    getAnswers(question.id)
      .then((res) => {
        setAnswers(res.data);
        const trueAnswerId = res.data.find((item) => item.correct === true).id;
        setTrueAnswer(trueAnswerId);
      })
      .catch((err) => {
        setError(true);
      });
  }, [question.id]);

  return (
    <div className="question-container flex flex-col rounded-lg border border-gray-400 p-3 bg-blue-200">
      <div className="question">سوال : {question.title}</div>
      <form
        onSubmit={submitAnswer}
        className="answers flex flex-col justify-start"
      >
        {answers.map((answer) => {
          return (
            <div className="answer space-x-3 mr-2" key={answer.id}>
              <input
                type="radio"
                name="answer"
                value={answer.id}
                id={answer.id}
              />
              <label className="pr-2" htmlFor={answer.id}>
                {answer.title}
              </label>
            </div>
          );
        })}
        {selected && <p className="text-green-600 p-3">پاسخ شما ثبت شد</p>}
        <button
          className={`py-2 ${
            selected
              ? "bg-green-500 hover:bg-green-600 ring-green-200"
              : "bg-blue-500 hover:bg-blue-600 ring-blue-200"
          } rounded-md ring`}
          type="submit"
        >
          {selected ? "تغییر پاسخ" : "ثبت پاسخ"}
        </button>
      </form>
    </div>
  );
};

export default Question;
