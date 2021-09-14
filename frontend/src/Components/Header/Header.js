import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserMeApi, logoutApi } from "../../Services/UserServiceMethods";
import { withRouter } from "react-router";
import { useToasts } from "react-toast-notifications";
const Header = (props) => {
  const { addToast } = useToasts();
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);
  useEffect(() => {
    if (token !== "") {
      getUserMeApi(token).then((res) => setUser(res.data));
    }
  }, [token]);
  const logoutHandle = () => {
    logoutApi(token);
    localStorage.removeItem("token");
    addToast("شما با موفقیت خارج شدید", {
      appearance: "success",
      autoDismiss: true,
    });
    props.history.push("/login");
  };
  return (
    <div
      style={{ backgroundColor: "#3B185F" }}
      className="header h-14 flex justify-around items-center text-white"
    >
      <div>
        <Link to="/" className="px-4 py-1 bg-blue-400 rounded-lg">
          صفحه اصلی
        </Link>
      </div>
      <div>
        <p>به سایت آزمون خوش آمدید</p>
      </div>
      <div className="flex">
        {token ? (
          <>
            <Link
              to="/result"
              className="px-4 py-1 mx-1 bg-blue-400 rounded-lg"
            >
              نتایج آزمون
            </Link>
            <p className="px-4 py-1 bg-green-400 font-normal rounded-lg text-lg text-black">
              {user.username}
            </p>
            <button
              className="px-4 py-1 mx-1 bg-red-600 rounded-lg"
              onClick={logoutHandle}
            >
              خروج
            </button>
          </>
        ) : (
          <Link to="/login" className="px-4 py-1 bg-blue-400 rounded-lg">
            ورود
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
