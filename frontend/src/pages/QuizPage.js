import { useEffect } from "react";
import Questions from "../Components/Questions/Questions";
import { useToasts } from "react-toast-notifications";
import Layout from "../layout/Layout";
import AuthenticateUser from "../Authentications/authenticateUserHook";

const QuizPage = (props) => {
  const { addToast } = useToasts();

  const authenticate = AuthenticateUser();
  useEffect(() => {
    if (authenticate === false) {
      addToast("برای شرکت در آزمون وارد شوید", {
        appearance: "warning",
        autoDismiss: true,
      });
      props.history.push("/login");
    }
  }, [authenticate]);
  return <Layout>{authenticate && <Questions {...props} />}</Layout>;
};

export default QuizPage;
