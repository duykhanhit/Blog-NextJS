import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <div>
      <Head>
        <title>Chi tiết bài viết</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container">
        <h3 style={{ textAlign: "center", padding: "200px" }}>
          Trang yêu cầu không tồn tại vui lòng{" "}
          <Link href="/">
            <a>click vào đây</a>
          </Link>{" "}
          để quay lại trang chủ.
        </h3>
      </div>
      <Footer />
    </div>
  );
}
