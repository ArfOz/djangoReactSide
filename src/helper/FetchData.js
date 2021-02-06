// https://blog-backend-django.herokuapp.com/
import axios from "axios";

export const fetchData = async (token) => {
  const response = await axios.get(
    `https://djangoandreact1.herokuapp.com/auth/user/`,
    {
      headers: { Authorization: `${token}` },
    },
    {
      key: "value",
    }
  );
  return response;
};
