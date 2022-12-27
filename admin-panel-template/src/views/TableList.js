import React, { useEffect, useState } from "react";
import axios from "axios";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function TableList() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [booksCount, setBooksCount] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async (e) => {
    console.log(e.currentTarget.id);
    const response = await axios.delete(
      `http://localhost:4000/api/v1/admin/book/${e.currentTarget.id}`
    );
    //ensuring that books has been successfully deleted from DB
    setIsDeleted(!isDeleted);

    console.log(isDeleted);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/v1/admin/books"
      );
      setBooks(response.data.books);
      setIsLoading(false);
      setBooksCount(response.data.booksCount);

      if (response.data.success === false) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(response.data.message);
      }
    };
    fetchBooks();
  }, [isDeleted]);

  if (isLoading) {
    return <h1>Loading ........</h1>;
  }

  if (isError) {
    return <h4>{errorMessage}</h4>;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of Books</Card.Title>
                <p className="card-category">
                  You have currentrly {booksCount} books in your database.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      {Object.keys(books[0]).map((c, index) => (
                        <th key={index} className="border-0">
                          {c}
                        </th>
                      ))}
                      <th className="border-0">Update</th>
                      <th className="border-0">Delete</th>
                      {/* <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((b, index) => {
                      return (
                        <tr key={index}>
                          <td>{b.stock}</td>
                          <td>{b._id}</td>
                          <td>{b.title}</td>
                          <td>{b.description}</td>
                          <td>{b.price}</td>
                          <td>{b.category}</td>
                          <td>
                            <Button
                              id={b._id}
                              onClick={(e) => handleUpdate(e)}
                              variant="success"
                              size="sm">
                              Update
                            </Button>
                          </td>
                          <td>
                            <Button
                              id={b._id}
                              onClick={(e) => handleDelete(e)}
                              variant="danger"
                              size="sm">
                              Delete
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
