import axios from "axios";

const baseUrl = "https://ys6pehn5si.execute-api.us-east-1.amazonaws.com/dev/transform"

function transform(data) {
  return axios.post(baseUrl, data);
}

export { transform };
