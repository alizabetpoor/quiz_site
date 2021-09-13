import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
const Routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/quiz/:quizid", component: QuizPage },
];

export default Routes;
