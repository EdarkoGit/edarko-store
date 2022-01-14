import axios from "axios";

export const actionGenerator = (type, payload) => {
  return { type, payload };
};
export const axiosGet = async (url) => {
  const data = await axios(url);
  return data.data;
};
