import React from "react";
import ReactPlayer from "react-player";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";

export default function Portfolio() {
  return (
    <div>
      <Layout>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "2%",
          }}
          level={3}
        >
          A glimpse of my project
        </Title>
        <div style={{ textAlign: "center" }}>
          <img
            src={require("../img/ss1.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="imdbapp"
          />
          <img
            src={require("../img/ss2.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="ayovest"
          />
        </div>
        <a href="https://www.mediafire.com/file/j1urnjdg4ck9x37/ayovest.apk/file">
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Download Ayovest APK
          </p>
        </a>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "2%",
          }}
          level={3}
        >
          Find my latest project!
        </Title>

        <div style={{ textAlign: "center" }}>
          <a href="https://github.com/vickyhrmawan">
            <img
              src={require("../img/githublogo.png")}
              style={{
                width: "40%",
                borderRadius: 10,
                margin: "1%",
                alignSelf: "center",
              }}
              alt="gitlab"
            />
          </a>
        </div>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "5%",
          }}
          level={3}
        >
          My latest team
        </Title>
        <div
          style={{
            position: "relative",
            paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
          }}
        >
          <ReactPlayer
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              paddingRight: "10%",
              paddingLeft: "10%",
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
