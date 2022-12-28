import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // version 5.2.0

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function UpdateBookForm() {
  const [book, setBook] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const history = useHistory();
  const navigateToList = (route) => history.push(route);

  const params = useParams();
  // console.log(params.id);

  //handleUpdate
  const handleUpdate = async (e) => {
    // console.log("handle");
    e.preventDefault();
    const updatedObject = {
      title,
      author,
      description,
      price,
      category,
      stock,
    };
    // console.log(updatedObject);
    await axios.put(
      `http://localhost:4000/api/v1/admin/book/${params.id}`,
      updatedObject
    );
    navigateToList("/admin/table");
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/v1/admin/book/${params.id}`
      );
      const { book } = response.data;
      setBook(book);
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description);
      setPrice(book.price);
      setCategory(book.category);
      setStock(book.stock);
    };
    fetchBooks();
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Update Book Info</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          onChange={(e) => setTitle(e.target.value)}
                          defaultValue={book.title}
                          placeholder="Company"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Author</label>
                        <Form.Control
                          onChange={(e) => setAuthor(e.target.value)}
                          defaultValue={book.author}
                          placeholder="Author Name"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          onChange={(e) => setPrice(e.target.value)}
                          defaultValue={book.price}
                          placeholder="Price"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Stock</label>
                        <Form.Control
                          onChange={(e) => setStock(e.target.value)}
                          defaultValue={book.stock}
                          placeholder="Stock"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Description</label>
                        <Form.Control
                          onChange={(e) => setDescription(e.target.value)}
                          as={"textarea"}
                          defaultValue={book.description}
                          placeholder="Add Description ........"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    onClick={(e) => handleUpdate(e)}
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    style={{ marginTop: "10px" }}>
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UpdateBookForm;
