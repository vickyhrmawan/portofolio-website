import React from "react";
import { Button, Layout, Menu, Row, Col, Space } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";

export default function Aboutme() {
  return (
    <div>
      <Layout
        style={{
          minHeight: "80vh"
        }}
      >
        <Title style={{ textAlign: "center", marginTop: "5%" }}>About Me</Title>
        <Layout>
          <text
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              paddingLeft: "10%",
              paddingRight: "10%",
              textAlign: "center"
            }}
          >
            A passionate learner, hard working and a travel man. I love new
            challenges and I wont hesitate to spend my time to do it.
          </text>
          <Title
            level={2}
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "20px",
              marginTop: "5%"
            }}
          >
            Why did I choose react native?
          </Title>
          <text
            style={{
              fontFamily: "poppins",
              fontWeight: "bold",
              paddingLeft: "10%",
              paddingRight: "10%"
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
              marginTop: "5%"
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
              textAlign: "center"
            }}
          >
            I strive to be better. I am eager to learn, and I also ready to take
            risks.
          </text>
        </Layout>
      </Layout>
    </div>
  );
}
