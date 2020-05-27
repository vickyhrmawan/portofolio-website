import React from "react";
import { Layout, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";

export default function Experience() {
  return (
    <Layout>
      <Title style={{ textAlign: "center", marginTop: "5%" }}>
        My Experience
      </Title>
      <div style={{ padding: "3%" }}>
        <Row>
          <Col flex="100px">
            <img
              src={require("../img/yakinmaju.jpeg")}
              alt="good quality best price"
              style={{
                width: "200px",
                height: "200px",
                padding: "4%",
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "2%" }}>
            <Title level={3}>PT. Yakin Maju Sentosa</Title>
            <a href="https://www.yakinmaju.com/en">
              <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>https://www.yakinmaju.com/en</p>
            </a>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>Sales Representative</p>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>
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
                padding: "4%",
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "2%" }}>
            <Title level={3}>Citibank NA</Title>
            <a href="https://www.citibank.co.id/">
              <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>https://www.citibank.co.id/</p>
            </a>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>Universal Banker</p>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>
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
                padding: "4%",
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "2%" }}>
            <Title level={3}>PT. Coolpad Electronic Indonesia</Title>
            <a href="https://coolpad.us/">
              <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>https://coolpad.us/</p>
            </a>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>HR Staff</p>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>
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
                padding: "4%",
              }}
            />
          </Col>
          <Col flex={3} style={{ padding: "2%" }}>
            <Title level={3}>PT. Sanbe Farma</Title>
            <a href="https://www.sanbe-farma.com/">
              <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>https://www.sanbe-farma.com/</p>
            </a>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>Medical Representative</p>
            <p style={{ fontSize: "16px", fontFamily: 'poppins' }}>
              Maintaining relationship with customer, Achieve sales target, Fill
              up report.
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
