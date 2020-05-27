import React, { createRef } from "react";
import { Button, Layout, Menu, Row, Space } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Title from "antd/lib/typography/Title";
import { BrowserRouter as Router } from "react-router-dom";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";

const { Header, Footer } = Layout;

export default function App() {
  const aboutmeScroll = createRef();

  const aboutmeSmoothHandler = (e) => {
    console.log(e);
    aboutmeScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactmeScroll = createRef();

  const contactmeSmoothHandler = (e) => {
    console.log(e);
    contactmeScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const experienceScroll = createRef();

  const experienceSmoothHandler = (e) => {
    console.log(e);
    experienceScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const portfolioScroll = createRef();

  const portfolioSmoothHandler = (e) => {
    console.log(e);
    portfolioScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div>
        <Layout>
          <Header style={{ backgroundColor: "white", fontFamily: "poppins", paddingLeft: "5px", paddingRight: "5px" }}>
            <Menu mode="horizontal">
              <Menu.Item key="1" style={{ fontSize: "18px" }}>Home</Menu.Item>
              <Menu.Item key="2" onClick={aboutmeSmoothHandler} style={{ fontSize: "18px" }}>
                About
              </Menu.Item>
              <Menu.Item key="3" onClick={contactmeSmoothHandler} style={{ fontSize: "18px" }}>
                Contact
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
                className='profile-picture'
                alt="vickyh"
              />
              <Layout>
                <Title
                  style={{
                    textAlign: "center",
                    margin: 0,
                    fontFamily: "poppins",
                  }}
                >
                  Vicky Hermawan
                </Title>
                <Title
                  level={4}
                  style={{
                    textAlign: "center",
                    margin: 0,
                    fontFamily: "poppins",
                  }}
                >
                  React Native Developer
                </Title>
                <Layout style={{ alignItems: "center", marginTop: "20px" }}>
                  <Space size={"large"}>
                    <a href="https://www.linkedin.com/in/vickyhrmawan/">
                      <LinkedinOutlined style={{ fontSize: 25 }} />
                    </a>
                    <a href="https://github.com/vickyhrmawan">
                      <GithubOutlined style={{ fontSize: 25 }} />
                    </a>
                    <a href="https://instagram.com/vickyhrmawan">
                      <InstagramOutlined style={{ fontSize: 25 }} />
                    </a>
                  </Space>
                  <text
                    style={{
                      fontFamily: "poppins",
                      fontWeight: "bold",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      paddingTop: "2%",
                      textAlign: "center",
                    }}
                  >
                    A passionate learner, hard working and tech entusiast. I love challenges and wont hesitate spending my time for it.
                  </text>
                </Layout>

                <Layout
                  style={{
                    marginTop: "50px",
                    alignItems: "center",
                    marginBottom: "5%",
                  }}
                >
                  <Space size={"large"}>
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "black",
                        borderColor: "black",
                        width: "120px",
                        fontFamily: "poppins",
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
                        width: "120px",
                        fontFamily: "poppins",
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

          <Layout style={{ textAlign: "center", paddingTop: "5%", paddingBottom: "5%", paddingRight: "1%", paddingLeft: "1%" }}>
            <Title>
              Latest Project
            </Title>
            <div
              className='player-wrapper'
            >
              <ReactPlayer
                className='react-player'
                url="https://youtu.be/QGMi1DgFd_A"
                width="100%"
              />
            </div>
          </Layout>
          <div ref={portfolioScroll}>
            <Portfolio />
          </div>
          <div ref={experienceScroll}>
            <Experience />
          </div>
          <Layout
            style={{
              backgroundColor: "white",
              marginTop: "5%",
            }}
          >
            {/* <Row type="flex" align="middle" style={{ minHeight: "80vh" }}>
              <Layout style={{ backgroundColor: "white" }}>
                <Title
                  style={{
                    textAlign: "center",
                    fontFamily: "poppins",
                  }}
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
                    padding: "2%",
                  }}
                >
                  It's capability to create an app for both android and iOS is
                  what people are looking for.With so many support from the
                  developers and community, makes it maintainable for a long
                  term.
                </p>
              </Layout>
            </Row> */}
            <div ref={contactmeScroll}>
              <Contact />
            </div>
            <Footer
              style={{
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "white",
              }}
            >
              © 2020 Vicky Hermawan, All Rights Reserved. This website was made
              using React.JS
            </Footer>
          </Layout>
        </div>
      </div>
    </Router >
  );
}
