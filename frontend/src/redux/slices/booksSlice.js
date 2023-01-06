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
    queryFields: {},
    page: 1,
    limit: 50,
    response: {},
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
    setResponse(state, action) {
      state.response = action.payload;
    },
  }, //reducer

  setDummy(state, action) {
    state.dummy = action.payload;
  },
});

export const { setStatus, setBooks, setDummy, setQueryFields, setResponse } =
  booksSlice.actions;
export default booksSlice.reducer;

export function fetchBooks() {
  return async function fetchBookThunk(dispatch, getState) {
    try {
      // console.log(getState().books.filterParams);
      const { category, title, language, priceRange } =
        getState().books.queryFields;

      const { limit, page } = getState().books;

      dispatch(setStatus(STATUSES.LOADING));

      let queryString = `http://localhost:4000/api/v1/books?`;

      if (limit) {
        queryString = queryString + `limit=${limit}`;
      }

      if (category !== undefined) {
        queryString = queryString + `&category=${category}`;
      }
      if (title !== undefined && title !== "") {
        queryString = queryString + `&title=${title}`;
      }
      if (language !== undefined) {
        queryString = queryString + `&language=${language}`;
      }
      if (priceRange !== undefined) {
        queryString = queryString + `&priceRange=${priceRange}`;
      }

      if (page) {
        queryString = queryString + `&page=${page}`;
      }
      console.log(queryString);

      const response = await axios(queryString);

      dispatch(setResponse(response.data));
      dispatch(setBooks(response.data.books));
      dispatch(setStatus(STATUSES.IDLE));
      // console.log(getState().books);
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
