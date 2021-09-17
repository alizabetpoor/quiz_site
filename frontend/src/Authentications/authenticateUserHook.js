import { getUserMeApi } from "../Services/UserServiceMethods";
import { useEffect, useState } from "react";
const AuthenticateUser = () => {
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserMeApi(token)
        .then((res) => {
          if (res.status === 200) {
            setAuthenticated(res.data);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setAuthenticated(false);
          }
        });
    } else {
      setAuthenticated(false);
    }
  }, []);
  return authenticated;
};

export default AuthenticateUser;
