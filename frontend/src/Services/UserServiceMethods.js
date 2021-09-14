import http from "./BaseService";

export const loginApi = (data) => {
  return http.post("/auth/token/login", data);
};
export const logoutApi = (token) => {
  return http.post(
    "/auth/token/logout",
    {},
    {
      headers: { authorization: "token " + token },
    }
  );
};

export const getUserMeApi = (token) => {
  return http.get("/auth/users/me", {
    headers: { authorization: "token " + token },
  });
};
