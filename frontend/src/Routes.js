import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
const Routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/quiz/:quizid", component: QuizPage },
  { path: "/login", component: LoginPage },
  { path: "", component: NotFoundPage },
];

export default Routes;
