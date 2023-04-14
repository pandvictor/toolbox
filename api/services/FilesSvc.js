const {
  getAllExternalFiles,
  getExternalFileByNameFile,
} = require("../apiExternal/files/files.service");

const getFileByFileName = async (fileName) => {
  const file = await getExternalFileByNameFile(fileName);

  const { status, data } = file;
  if (status !== 200) {
    return null;
  }
  let lines = [];

  if (data) {
    lines = data
      .trim()
      .split("\n")
      .slice(1)
      .map((line) => {
        const values = line.split(",");

        if (values.length !== 4) {
          console.warn(`Invalid line in file ${fileName}:`, line);
          return null;
        }
        const [file, text, number, hex] = values;
        if (!text || isNaN(number) || hex.length !== 32) {
          //console.warn(`Invalid values in line of file ${fileName}:`, line);
          return null;
        }
        //return { text, number: Number(number), hex };
        return { text, number: number, hex };
      })
      .filter((line) => line !== null);
  }

  return { file: fileName, lines };
};

const getJsonFilesByFileList = async (files) => {
  let data = await Promise.all(
    files
      .map(async (file) => {
        const res = await getFileByFileName(file);
        if (!res) return null;
        return res;
      })
      .filter((obj) => obj !== null)
  );
  return data;
};

const getAll = async () => {
  const data = await getAllExternalFiles();

  const { files, status } = data;

  if (status !== 200) {
    console.warn("Error:", data.error);
    return data.error;
  }
  if (!files) {
    console.warn("Error: No Files found!");
    return { status: 400, error: "No Files found!" };
  }

  const filesJson = await getJsonFilesByFileList(files);

  return filesJson;
};
module.exports = { getAll };
