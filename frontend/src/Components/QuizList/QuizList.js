import Quiz from "./Quiz";

const QuizList = (props) => {
  return (
    <div className="quiz-list w-3/4 flex flex-col items-center my-2">
      {props.quizes.map((quiz) => {
        return <Quiz key={quiz.id} quiz={quiz} />;
      })}
    </div>
  );
};

export default QuizList;
