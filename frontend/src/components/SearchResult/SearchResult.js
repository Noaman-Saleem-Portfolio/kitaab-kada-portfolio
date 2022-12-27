import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterParams, setFilterParams] = useState(
    Object.fromEntries([...searchParams])
  );
  // setFilterParams();
  console.log(filterParams);

  useEffect(() => {
    const fetchBooks = async () => {
      let response = await axios.get(
        "http://localhost:4000/api/v1/admin/book/new"
      );
      console.log(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <div>SearchResult</div>
    </>
  );
};

export default SearchResult;
