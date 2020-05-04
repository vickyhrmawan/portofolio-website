import React, { createRef } from "react";
import { Button, Layout, Menu, Row, Space } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Title from "antd/lib/typography/Title";
import { BrowserRouter as Router } from "react-router-dom";
import {
  LinkedinOutlined,
  GitlabOutlined,
  InstagramOutlined
} from "@ant-design/icons";
import ReactPlayer from "react-player";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";

const { Header, Content } = Layout;

export default function App() {
  const aboutmeScroll = createRef();

  const aboutmeSmoothHandler = e => {
    console.log(e);
    aboutmeScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactmeScroll = createRef();

  const contactmeSmoothHandler = e => {
    console.log(e);
    contactmeScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const experienceScroll = createRef();

  const experienceSmoothHandler = e => {
    console.log(e);
    experienceScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const portfolioScroll = createRef();

  const portfolioSmoothHandler = e => {
    console.log(e);
    portfolioScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div>
        <Layout>
          <Header style={{ backgroundColor: "white", fontFamily: "poppins" }}>
            <Menu mode="horizontal">
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2" onClick={aboutmeSmoothHandler}>
                About Me
              </Menu.Item>
              <Menu.Item key="3" onClick={contactmeSmoothHandler}>
                Contact Me
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <div>
          <Layout>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ minHeight: "80vh" }}
            >
              <img
                src={require("./img/profpic.jpg")}
                style={{
                  width: "25%",
                  borderRadius: 10,
                  margin: "5%"
                }}
                alt="vickyh"
              />
              <Layout>
                <Title
                  style={{
                    textAlign: "center",
                    margin: 0,
                    fontFamily: "poppins"
                  }}
                >
                  Vicky Hermawan
                </Title>
                <Title
                  level={4}
                  style={{
                    textAlign: "center",
                    margin: 0,
                    fontFamily: "poppins"
                  }}
                >
                  React Native Developer
                </Title>
                <Layout style={{ alignItems: "center", marginTop: "20px" }}>
                  <Space size={"large"}>
                    <a href="https://www.linkedin.com/in/vicky-hermawan-1a0174a3/">
                      <LinkedinOutlined style={{ fontSize: 20 }} />
                    </a>
                    <a href="https://gitlab.com/vickyhrmawan">
                      <GitlabOutlined style={{ fontSize: 20 }} />
                    </a>
                    <a href="https://instagram.com/vickyhrmawan">
                      <InstagramOutlined style={{ fontSize: 20 }} />
                    </a>
                  </Space>
                </Layout>

                <Layout style={{ marginTop: "50px", alignItems: "center" }}>
                  <Space size={"large"}>
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "black",
                        borderColor: "black",
                        width: "120%",
                        fontFamily: "poppins"
                      }}
                      onClick={experienceSmoothHandler}
                    >
                      Experience
                    </Button>
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "black",
                        borderColor: "black",
                        width: "120%",
                        fontFamily: "poppins"
                      }}
                      onClick={portfolioSmoothHandler}
                    >
                      Portfolio
                    </Button>
                  </Space>
                </Layout>
              </Layout>
            </Row>
          </Layout>
          <div ref={aboutmeScroll}>
            <Aboutme />
          </div>

          <Layout style={{ padding: "30px" }}>
            <Row type="flex" justify="center">
              <Title level={2}>My Latest Project</Title>
            </Row>
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
              }}
            >
              <ReactPlayer
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  paddingRight: "10%",
                  paddingLeft: "10%"
                }}
                url="https://youtu.be/QGMi1DgFd_A"
                width="100%"
                height="100%"
              />
            </div>
          </Layout>
          <div ref={portfolioScroll}>
            <Portfolio />
          </div>
          <div ref={experienceScroll}>
            <Experience />
          </div>
          <Layout>
            <Row type="flex" align="middle" style={{ minHeight: "80vh" }}>
              <Layout>
                <Title
                  style={{
                    textAlign: "center",
                    fontFamily: "poppins"
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
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "2%"
                  }}
                >
                  It's capability to create an app for both android and iOS is
                  what people are looking for.With so many support from the
                  developers and community, makes it maintainable for a long
                  term.
                </p>
              </Layout>
            </Row>
            <div ref={contactmeScroll}>
              <Contact />
            </div>
          </Layout>
        </div>
      </div>
    </Router>
  );
}
