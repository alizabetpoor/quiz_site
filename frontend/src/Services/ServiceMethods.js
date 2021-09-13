import http from "./BaseService";

export const getQuiz = (id = "") => {
  return http.get(`/quiz/${id}`);
};

export const getResult = (id = "") => {
  return http.get(`/result/${id}`);
};
export const postResult = (data) => {
  return http.post(`/result`, data);
};

export const getQuestions = (quizid) => {
  return http.get(`/questions/${quizid}`);
};
export const getAnswers = (questionid) => {
  return http.get(`/answers/${questionid}`);
};
