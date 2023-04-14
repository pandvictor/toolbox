import { getAllFiles } from "../../api/files/files.service";
export const getFilesRequest = () => {
  return { type: "GET_FILES_REQUEST" };
};

export const getFilesSuccess = (files) => {
  return { type: "GET_FILES_SUCCESS", payload: files };
};

export const getFilesFailure = (error) => {
  return { type: "GET_FILES_FAILURE", error };
};

export const getFiles = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_FILES_REQUEST" });
    await getAllFiles()
      .then((response) => response.json())
      .then((files) => {
        dispatch(getFilesSuccess(files));
      })
      .catch((error) => {
        dispatch(getFilesFailure(error));
      });
  };
};
