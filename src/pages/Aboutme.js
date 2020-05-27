import React from "react";
import { Layout, Row } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";

const { Content } = Layout;

export default function Aboutme() {
  return (
    <div>
      <Layout
        style={{
          minHeight: "80vh",
          backgroundColor: "white",
        }}
      >
        <Title style={{ textAlign: "center", marginTop: "5%" }}>About Me</Title>
        <Layout
          style={{
            backgroundColor: "white",
            marginBottom: "5%",
          }}
        >
          <Row type="flex" align="middle" style={{ minHeight: "80vh" }}>
            <Layout style={{ backgroundColor: "white" }}>
              <Title
                style={{
                  textAlign: "center",
                  fontFamily: "poppins",
                  fontSize: "20px",
                }}
                level={2}
              >
                Why React Native?
                </Title>
              <Content>
                <div className="container">
                  <span className="react-logo">
                    <span className="nucleo"></span>
                  </span>
                </div>
              </Content>
              <p
                style={{
                  fontFamily: "poppins",
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                It's capability to create an app for both android and iOS is
                what people are looking for. With so many support from the
                developers and community, makes it maintainable for a long
                term.
                </p>
            </Layout>
          </Row>
          <Title
            level={2}
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            Why did I choose it?
          </Title>
          <text
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              paddingLeft: "10%",
              paddingRight: "10%",
              textAlign: "left",
            }}
          >
            For the first time, I thought I wanna create something. That's why I
            chose react-native at a tech-bootcamp and it didn't disappoint me.
            For a blank experience person like me, react-native basic is quite
            understandable. And also it has a lot of support from the developers
            and community. So when I was stuck at something, I can look forward
            the same question at stack overflow.
          </text>
          <Title
            level={2}
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "20px",
              marginTop: "5%",
            }}
          >
            Why me?
          </Title>
          <text
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              paddingLeft: "10%",
              paddingRight: "10%",
              textAlign: "left",
            }}
          >
            I strive to be better. I am eager to learn, and I am also ready to take
            risks.
          </text>
        </Layout>
      </Layout>
    </div>
  );
}
