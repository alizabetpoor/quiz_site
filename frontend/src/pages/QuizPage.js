import Questions from "../Components/Questions/Questions";
import Layout from "../layout/Layout";
const QuizPage = (props) => {
  return (
    <Layout>
      <Questions {...props} />
    </Layout>
  );
};

export default QuizPage;
