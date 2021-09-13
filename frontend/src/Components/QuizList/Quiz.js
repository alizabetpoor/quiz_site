const Quiz = ({ quiz }) => {
  return (
    <div className="quiz my-3 flex flex-col transition-transform bg-purple-100 transform hover:-translate-y-2 space-y-2 items-start w-3/5 border border-gray-300 rounded-xl p-3">
      <h3 style={{ color: "#A12568" }} className="font-semibold text-lg">
        {quiz.title}
      </h3>
      <p style={{ color: "#3B185F" }}>{quiz.description}</p>
      <div className="flex justify-between pb-4 border-b-2 border-gray-400 self-stretch">
        <p>
          تایم آزمون:
          <span className="font-bold text-red-500"> {quiz.time_quiz}دقیقه</span>
        </p>
        <p>
          حداقل نمره قبولی:
          <span className="text-green-600 font-bold">
            {quiz.required_score}%
          </span>
        </p>
      </div>
      <button className="py-2 px-4 mt-2 ring ring-purple-200 rounded-2xl">
        شرکت در آزمون
      </button>
    </div>
  );
};

export default Quiz;
