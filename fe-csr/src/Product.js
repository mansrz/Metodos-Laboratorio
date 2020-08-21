import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-fetching-library";
import Axios from "axios";
import { Col, Image } from "react-bootstrap";

const Product = ({ id, url }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(url).then(data => {
      setProduct(data.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>cargando {id}</p>;
  }
  console.log(product);
  return (
    <Fragment>
      <Col>
        {product && product.title}{" "}
        {product && product.images.map(item => <Image src={item.original} />)}
      </Col>
    </Fragment>
  );
};

export default Product;
