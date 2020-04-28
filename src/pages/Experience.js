import React from "react";
import { Layout, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";

export default function Experience() {
  return (
    <Layout>
      <Title style={{ textAlign: "center", marginTop: "5%" }}>
        My Experience
      </Title>
      <div style={{ padding: "50px 100px" }}>
        <Row>
          <Col flex="100px">
            <img
              src={require("../img/yakinmaju.jpeg")}
              alt="good quality best price"
              style={{
                width: "200px",
                height: "200px",
                padding: "5%"
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "5%" }}>
            <Title level={3}>PT. Yakin Maju Sentosa</Title>
            <p>Sales Representative</p>
            <p>
              Maintaining relationship with customer, Achieve sales target,
              Ensure the delivery and product training.
            </p>
          </Col>
        </Row>
        <Row>
          <Col flex="100px">
            <img
              src={require("../img/citi.png")}
              alt="well known bank"
              style={{
                width: "200px",
                height: "200px",
                padding: "5%"
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "5%" }}>
            <Title level={3}>Citibank NA</Title>
            <p>Universal Banker</p>
            <p>
              Explaining product knowledge to customer, Making proposal to
              company for product presentation.
            </p>
          </Col>
        </Row>
        <Row>
          <Col flex="100px">
            <img
              src={require("../img/coolpad.png")}
              alt="good quality best price"
              style={{
                width: "200px",
                height: "200px",
                padding: "5%"
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "5%" }}>
            <Title level={3}>PT. Coolpad Electronic Indonesia</Title>
            <p>HR Staff</p>
            <p>
              Managing recruitment, payroll, contracts and general affair stuff.
            </p>
          </Col>
        </Row>
        <Row>
          <Col flex="100px">
            <img
              src={require("../img/sanbe.jpg")}
              alt="bosnya pelit"
              style={{
                width: "200px",
                height: "200px",
                padding: "5%"
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "5%" }}>
            <Title level={3}>PT. Sanbe Farma</Title>
            <p>Medical Representative</p>
            <p>
              Maintaining relationship with customer, Achieve sales target, Fill
              up report.
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
