import React from "react";
import ReactPlayer from "react-player";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Title from "antd/lib/typography/Title";
import "../App.css";

export default function Portfolio() {
  return (
    <div>
      <Layout style={{ backgroundColor: "white", marginBottom: "5%" }}>
        <Title
          style={{
            fontFamily: "poppins",
            textAlign: "center",
            marginTop: "2%",
            marginRight: "1%",
            marginLeft: "1%",
          }}
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
            alt="ayovest home"
          />
          <img
            src={require("../img/ss2.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="ayovest category"
          />
          <img
            src={require("../img/ss3.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="ayovest profile"
          />
        </div>
        <div style={{ borderWidth: "2px", backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '10px', width: "15em", alignSelf: 'center', justifySelf: 'center', marginTop: "5px", marginBottom: "5px" }}>
          <a href="https://download1082.mediafire.com/zr791xbqm2dg/j1urnjdg4ck9x37/ayovest.apk">
            <p style={{ textAlign: "center", fontWeight: "bold", marginTop: '1em' }}>
              Download Ayovest APK
          </p>
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={require("../img/ss4.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="weatherapp-en"
          />
          <img
            src={require("../img/ss5.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="weatherapp-lang"
          />
          <img
            src={require("../img/ss6.png")}
            style={{
              width: "20%",
              borderRadius: 10,
              margin: "2%",
            }}
            alt="weatherapp-zh"
          />
        </div>
        <div style={{ borderWidth: "2px", backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '10px', width: "15em", alignSelf: 'center', justifySelf: 'center', marginTop: "5px", marginBottom: "5px" }}>
          <a href="http://download1083.mediafire.com/soimm5ongeug/7wosms7wcyrqwlt/WeatherApp.apk">
            <p style={{ textAlign: "center", fontWeight: "bold", marginTop: '1em' }}>
              Download Weather App APK
          </p>
          </a>
        </div>
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
          className='player-wrapper'
        >
          <ReactPlayer
            className='react-player'
            url="https://www.youtube.com/watch?v=ApnbTMhP-r8"
            width="100%"
          />
        </div>
      </Layout>
    </div>
  );
}
