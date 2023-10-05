import { userUrl, requestOptions } from "../util/constants";
import axios from "axios";

export async function getUsers() {
  const response = await axios.get(userUrl, requestOptions).catch((err) => {
    throw err;
  });
  console.log(response.data);
  return response.data;
}