import React, { useState, useCallback, Fragment } from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';

import { InferGetServerSidePropsType } from 'next';
import Layout from 'components/Layout';
import Button from 'components/Button';
import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import { Container, Row, Col, Image } from 'react-bootstrap';
import 'styles/index.scss';
import Product from './product';

const layoutProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};

const Paragraph = styled.p.attrs({
  className: 'main__description',
})``;

export const getServerSideProps: GetServerSideProps = async () => {
  let data = null;
  try {
    const ndata = await fetch(
      'http://52.87.205.52:8005/api/products/?format=json',
    );
    if (ndata) {
      data = await ndata.json();
    }
    return { props: { data } };
  } catch (error) {
    // Do nothing
    return { props: { data: {} } };
  }
};

const Content = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);
  return (
    <Fragment>
      {' '}
      <Container>
        <Row>
          {data &&
            data.map((item) => (
              <Col key={item.id} md={3}>
                <Product data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Content;
