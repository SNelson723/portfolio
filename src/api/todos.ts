import axios from "axios";

export const getTodos = async (url: string, token: string, id: number) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    url: url + "todos/get_todos",
    params: {
      id,
    },
  });
  return json;
};
