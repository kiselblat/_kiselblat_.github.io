import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Layout } from '../Layout';

export const Nameplate = props => {
  return(
    <Layout className={`${props.className} nameplate`} style={props.style}>
      <Row>
        <Col>
          <h1>{props.children}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p><em>{props.subtitle}</em></p>
        </Col>
      </Row>
    </Layout>
  )
}