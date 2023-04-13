const { Get } = require("../httpService");

const ENDPOINT_GET_ALL_FILES = `https://echo-serv.tbxnet.com/v1/secret/files/`;
const ENDPOINT_GET_FILE = `https://echo-serv.tbxnet.com/v1/secret/file/`;

async function getAllExternalFiles() {
  let data = {};

  await Get(`${ENDPOINT_GET_ALL_FILES}`)
    .then((apiResponse) => {
      const info = apiResponse.data;
      data = { status: 200, files: info.files };
    })
    .catch((error) => {
      console.warn("error", error);
      data = { status: 400, error: error.message };
    });
  return data;
}
async function getExternalFileByNameFile(fileName) {
  let data = {};
  await Get(`${ENDPOINT_GET_FILE}${fileName}`)
    .then((apiResponse) => {
      const info = apiResponse.data;
      data = { status: 200, data: info };
    })
    .catch((error) => {
      console.warn("error", error.message);
      data = { status: 400, error: error.message };
    });
  return data;
}
module.exports = { getAllExternalFiles, getExternalFileByNameFile };
