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
    queryFields: { name: "nomi" },
    dummy: 2222,
  },
  reducers: {
    setBooks(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setQueryFields(state, action) {
      state.queryFields = action.payload;
    },
    setDummy(state, action) {
      state.dummy = action.payload;
    },
  },
});

export const { setStatus, setBooks, setDummy, setQueryFields } =
  booksSlice.actions;
export default booksSlice.reducer;

export function fetchBooks() {
  return async function fetchBookThunk(dispatch, getState) {
    try {
      // console.log(getState().books.filterParams);
      const { category, title } = getState().books.queryFields;
      dispatch(setStatus(STATUSES.LOADING));
      let queryString = `http://localhost:4000/api/v1/books?`;
      if (category !== "") {
        queryString = queryString + `category=${category}`;
      }
      if (title !== "") {
        queryString = queryString + `&title=${title}`;
      }
      console.log(queryString);
      const response = await axios(queryString);
      console.log(response);
      dispatch(setBooks(response.data.books));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("In Fectch Book Error");
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
