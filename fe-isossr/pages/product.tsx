import React, { Fragment } from 'react';
import { Col, Image } from 'react-bootstrap';

const Product = ({ data }: { data: any }) => {
  return (
    <Fragment>
      <Col>
        <a href={data.url}>
          {data && data.images.map((item) => <Image src={item.original} />)}
          {data && data.title}{' '}
        </a>
        {data && (
          <p>
            {data.currency}
            <br />
            {data.price_t}
          </p>
        )}
        {data && <p>In stock</p>}
        <button
          type="submit"
          class="btn btn-primary btn-block"
          data-loading-text="Adding..."
        >
          Add to basket
        </button>{' '}
      </Col>
    </Fragment>
  );
};

export default Product;
