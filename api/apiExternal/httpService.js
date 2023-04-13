const axios = require("axios").default;
const options = {
  headers: { Authorization: "Bearer aSuperSecretKey" },
};
const Get = (url) => {
  return axios.get(`${url}`, options);
};
module.exports = { Get };
