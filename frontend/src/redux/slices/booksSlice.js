import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const booksSlice = createSlice({
  name: "book",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setBooks(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatus, setBooks } = booksSlice.actions;
export default booksSlice.reducer;

export function fetchBooks() {
  return async function fetchBookThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios("http://localhost:4000/api/v1/books");
      // console.log(response);
      dispatch(setBooks(response.data.books));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

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
