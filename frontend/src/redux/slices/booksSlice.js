import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setPosts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
});

const {} = booksSlice.actions;
export default booksSlice.reducer;

// export function fetchPosts() {
//     return async function fetchPostThunk(dispatch, getState) {
//       dispatch(setStatus(STATUSES.LOADING));
//       try {
//         //   const res = await fetch("http://localhost:8000/posts");
//         // const data = await res.json();
//         const response = await axios.get("http://localhost:8000/posts");
//         //   console.log(response.data);
//         dispatch(setPosts(response.data));
//         dispatch(setStatus(STATUSES.IDLE));
//         //   console.log(getState());
//       } catch (err) {
//         console.log(err);
//         dispatch(setStatus(STATUSES.ERROR));
//       }
//     };
//   }
