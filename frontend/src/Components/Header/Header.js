import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserMeApi } from "../../Services/UserServiceMethods";
const Header = () => {
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
      const tok = `Token ${token}`;
      getUserMeApi(tok).then((res) => setUser(res.data));
    }
  }, [token]);
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
      <div>
        {token ? (
          <p className="px-4 py-1 bg-green-400 font-normal rounded-lg text-lg text-black">
            {user.username}
          </p>
        ) : (
          <Link to="/login" className="px-4 py-1 bg-blue-400 rounded-lg">
            ورود
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
