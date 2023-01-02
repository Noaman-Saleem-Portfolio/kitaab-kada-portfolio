import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

//Search Page components
import FilterOptions from "./FilterOptions";
import Results from "./Results";

//Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./searchResult.css";

const SearchResult = () => {
  //Converting search params into an object
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterParams, setFilterParams] = useState(
    Object.fromEntries([...searchParams])
  );

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     let response = await axios.get(
  //       "http://localhost:4000/api/v1/admin/book/new"
  //     );
  //     console.log(response.data);
  //   };
  //   fetchBooks();
  // }, []);

  return (
    <>
      <Container className="search-result">
        <Row>
          <Col md={4}>
            {/* Sidebar Section */}
            <FilterOptions></FilterOptions>
          </Col>
          <Col md={8} style={{ borderLeft: "1px solid #c8c9ca" }}>
            {/* Search Result Section */}
            <Results></Results>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResult;
