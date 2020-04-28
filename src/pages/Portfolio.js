import React from "react";
import ReactPlayer from "react-player";
import { Button, Layout, Menu, Row, Col, Space } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";

//https://www.youtube.com/watch?v=ApnbTMhP-r8

export default function Portfolio() {
  return (
    <div>
      <Layout>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "2%"
          }}
        >
          A glimpse of my project
        </Title>
        <div style={{ textAlign: "center" }}>
          <img
            src={require("../img/ss1.png")}
            style={{
              width: "10%",
              borderRadius: 10,
              margin: "2%"
            }}
          />
          <img
            src={require("../img/ss2.png")}
            style={{
              width: "10%",
              borderRadius: 10,
              margin: "2%"
            }}
          />
        </div>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "2%"
          }}
        >
          Find my latest project here!
        </Title>

        <div style={{ textAlign: "center" }}>
          <a href="https://gitlab.com/vickyhrmawan">
            <img
              src={require("../img/gitlablogo.png")}
              style={{
                width: "20%",
                borderRadius: 10,
                margin: "1%",
                alignSelf: "center"
              }}
            />
          </a>
        </div>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "5%"
          }}
        >
          My latest team
        </Title>
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
            url="https://www.youtube.com/watch?v=ApnbTMhP-r8"
            width="100%"
            height="100%"
          />
        </div>
      </Layout>
    </div>
  );
}
