import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

export default function Contact() {
  return (
    <div>
      <Layout
        style={{
          alignItems: "center",
          minHeight: "80vh",
          justifyContent: "center"
        }}
      >
        <text style={{ fontFamily: "poppins", fontWeight: "bold" }}>
          Vicky Hermawan
        </text>
        <text style={{ fontFamily: "poppins", fontWeight: "bold" }}>
          +62 81 910 630 633
        </text>
        <text style={{ fontFamily: "poppins", fontWeight: "bold" }}>
          vickyhrmawan@gmail.com
        </text>
      </Layout>
    </div>
  );
}
