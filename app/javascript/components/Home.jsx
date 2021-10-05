import React from "react";
import { Layout } from "antd";
import Movies from "./Movies";
import Header from "./Header";

const { Content, Footer } = Layout;

function Home() {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ margin: "100px auto" }}>
          <h1>Movie's Catalog</h1>
          <Movies />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Jayden Jin ©2021.</Footer>
    </Layout>
  );
}

export default Home;
