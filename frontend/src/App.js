import "./App.css";
import { Route, Switch } from "react-router-dom";
import Routes from "./Routes";
import Layout from "./layout/Layout";
import { ToastProvider } from "react-toast-notifications";
function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Switch>
          {Routes.map((route, index) => {
            return <Route key={index} {...route} />;
          })}
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default App;
