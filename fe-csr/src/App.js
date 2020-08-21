import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([]);
  const [cproducts, setCProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get("http://52.87.205.52:8005/api/products/?format=json").then(
      data => {
        setProducts(data.data);
        setLoading(false);
      }
    );
  }, []);

  console.log(products);
  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <Container>
      <Row>
        {products &&
          products.map(item => (
            <Col md={3} key={item.id}>
              <Product data={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default App;
