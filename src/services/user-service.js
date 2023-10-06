import { userUrl, requestOptions } from "../util/constants";
import axios from "axios";

export async function getUsers() {
  const response = await axios.get(userUrl, requestOptions).catch((err) => {
    throw err;
  });
  console.log(response.data);
  return response.data;
}

export async function addUser(user) {
  const response = await axios
    .post(userUrl, user, requestOptions)
    .catch((err) => {
      throw err;
    });
  return response.data;
}
