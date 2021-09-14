import { useState } from "react";
const LoginPage = () => {
  const [authDetail, setAuthDetail] = useState({ username: "", password: "" });
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(authDetail);
  };
  return (
    <div className="login">
      <h3>ورود به سایت</h3>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="username">یوزرنیم</label>
          <input
            type="text"
            value={authDetail.username}
            onChange={(e) =>
              setAuthDetail({ ...authDetail, username: e.target.value })
            }
            placeholder="یوزرنیم"
          />
        </div>
        <div>
          <label htmlFor="password">پسورد</label>
          <input
            type="text"
            value={authDetail.password}
            onChange={(e) =>
              setAuthDetail({ ...authDetail, password: e.target.value })
            }
            placeholder="پسورد"
          />
        </div>
        <button>ورود</button>
      </form>
    </div>
  );
};

export default LoginPage;
