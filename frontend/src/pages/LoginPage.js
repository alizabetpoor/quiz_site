import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Layout from "../layout/Layout";
import { loginApi } from "../Services/UserServiceMethods";
import AuthenticateUser from "../Authentications/authenticateUserHook";
const LoginPage = (props) => {
  const [authDetail, setAuthDetail] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const { addToast } = useToasts();
  const authenticate = AuthenticateUser();

  useEffect(() => {
    if (authenticate) {
      addToast("شما لاگین کرده اید", { appearance: "info", autoDismiss: true });
      props.history.push("/");
    }
  }, [authenticate]);
  const loginHandler = (e) => {
    e.preventDefault();
    loginApi(authDetail)
      .then((res) => {
        localStorage.setItem("token", res.data.auth_token);
        setLoginError(false);
        addToast("با موفقیت لاگین کردید", {
          appearance: "success",
          autoDismiss: true,
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err.data);
        setLoginError(true);
      });
  };
  return (
    <Layout>
      <div className="login flex flex-col items-stretch w-3/5 mt-4">
        <h3>ورود به سایت</h3>
        <form
          onSubmit={loginHandler}
          className="p-2 space-y-2 flex flex-col items-stretch"
        >
          <div className="flex flex-col">
            <label htmlFor="username">یوزرنیم:</label>
            <input
              id="username"
              className="rounded-lg p-2"
              type="text"
              value={authDetail.username}
              onChange={(e) =>
                setAuthDetail({ ...authDetail, username: e.target.value })
              }
              placeholder="یوزرنیم"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">پسورد:</label>
            <input
              id="password"
              className="rounded-lg p-2"
              type="password"
              value={authDetail.password}
              onChange={(e) =>
                setAuthDetail({ ...authDetail, password: e.target.value })
              }
              placeholder="پسورد"
            />
          </div>
          {loginError ? (
            <p className="bg-red-100 text-red-600 rounded-sm">
              اطلاعات اکانت وارد شده درست نمیباشد
            </p>
          ) : null}
          <button className="py-2 px-4 rounded-xl">ورود</button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
