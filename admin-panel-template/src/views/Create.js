import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // version 5.2.0

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("all");
  const [stock, setStock] = useState("");

  const history = useHistory();
  const navigateToList = (route) => history.push(route);

  //handle create logic
  const handleCreate = async (e) => {
    e.preventDefault();
    // console.log(author);

    const response = await axios.post(
      `http://localhost:4000/api/v1/admin/book/new`,
      {
        title,
        author,
        description,
        price,
        category,
        stock,
      }
    );

    // console.log(response);

    navigateToList("/admin/table");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add New Book</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          onChange={(e) => setTitle(e.target.value)}
                          defaultValue={title}
                          placeholder="Company"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Author</label>
                        <Form.Control
                          onChange={(e) => setAuthor(e.target.value)}
                          defaultValue={author}
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
                          defaultValue={price}
                          placeholder="Price"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Stock</label>
                        <Form.Control
                          onChange={(e) => setStock(e.target.value)}
                          defaultValue={stock}
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
                          defaultValue={description}
                          placeholder="Add Description ........"
                          type="text"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col style={{ margin: "auto" }}>
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="all">Category</option>
                        <option value="novel">Novel</option>
                        <option value="health">Health</option>
                        <option value="business">Business</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Button
                    onClick={(e) => handleCreate(e)}
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    style={{ marginTop: "10px" }}>
                    Create Book
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

export default Create;
