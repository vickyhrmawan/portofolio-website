import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Button, Layout, Menu, Row, Col, Space } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import Title from "antd/lib/typography/Title";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

// https://youtu.be/QGMi1DgFd_A

const { Header, Footer, Content, Sider } = Layout;

export default function App() {
  return ReactDOM.render(
    <Router>
      <div>
        <Layout>
          <Header style={{ backgroundColor: "white", fontFamily: "poppins" }}>
            <Menu mode="horizontal">
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/about">About Me</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/contactme">Contact Me</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contactme">
            <Contactme />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>,
    document.getElementById("root")
  );
}

function Home() {
  return (
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
              width: "20%",
              borderRadius: 10,
              margin: "1%"
            }}
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
                    width: "200px",
                    fontFamily: "poppins"
                  }}
                >
                  <Link to="/experience">Experience</Link>
                </Button>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "black",
                    borderColor: "black",
                    width: "200px",
                    fontFamily: "poppins"
                  }}
                >
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
              </Space>
            </Layout>
          </Layout>
        </Row>
      </Layout>
      <Layout style={{ backgroundColor: "white", padding: "30px" }}>
        <Row type="flex" justify="center">
          <Title>My Latest Project</Title>
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
      <Layout>
        <Row type="flex" align="middle" style={{ minHeight: "80vh" }}>
          <Layout>
            <Title
              style={{
                textAlign: "center",
                margin: 0,
                fontFamily: "poppins"
              }}
            >
              Why React Native?
            </Title>
            <Content>
              <div class="container">
                <span class="react-logo">
                  <span class="nucleo"></span>
                </span>
              </div>
            </Content>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              It's capability to create an app for both android and iOS is what
              people are looking for.With so many support from the developers
              and community, makes it maintainable for a long term.
            </p>
          </Layout>
        </Row>
      </Layout>
    </div>
  );
}

function About() {
  return (
    <div>
      <Aboutme />
    </div>
  );
}

function Contactme() {
  return (
    <div>
      <Contact />
    </div>
  );
}
