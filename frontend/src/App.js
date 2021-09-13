import "./App.css";
import { Route, Switch } from "react-router-dom";
import Routes from "./Routes";
import Layout from "./layout/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <div className="main w-full flex justify-center">
          <Switch>
            {Routes.map((route, index) => {
              return <Route key={index} {...route} />;
            })}
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
