import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./components/Home/Home";
import SearchResult from "./components/SearchResult/SearchResult";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/search" element={<SearchResult></SearchResult>}></Route>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
