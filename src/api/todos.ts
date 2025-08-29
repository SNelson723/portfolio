import axios from "axios";

export const getTodos = async (url: string, token: string, user_id: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    url: url + "todos/get_todos",
    params: {
      user_id,
    },
  });
  return json;
};
