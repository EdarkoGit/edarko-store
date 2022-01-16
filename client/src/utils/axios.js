import axios from "axios";
export const axiosGet = async (url) => {
  const data = await axios(url);
  return data.data;
};
