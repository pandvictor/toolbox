import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFiles } from "../api/files/files.service";

export const getFiles = createAsyncThunk("files/getFiles", async () => {
  let temp = [];
  const response = await getAllFiles()
    // .then((response) => response.json())
    .then((response) => {
      temp = response.data;
    });
  console.log("res", response);
  //   const files = await response.data.json();

  return temp;
});

const filesSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFiles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.files = action.payload;
        state.error = null;
      })
      .addCase(getFiles.rejected, (state, action) => {
        state.status = "failed";
        state.files = [];
        state.error = action.error.message;
      });
  },
});

export const selectFiles = (state) => state.files.files;

export default filesSlice.reducer;
