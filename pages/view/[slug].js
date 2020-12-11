import React from "react";
import Footer from "../../components/Footer";
import PostDetail from "../../components/PostDetail";

export default function ViewDetail() {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <PostDetail />
      {/* <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h2>More Related Posts</h2>
            </div>
          </div>

          <div className="row align-items-stretch retro-layout">
            <div className="col-md-5 order-md-2">
              <a href="single.html" className="hentry img-1 h-100 gradient">
                <span className="post-category text-white bg-danger">
                  Travel
                </span>
                <div className="text">
                  <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                  <span>February 12, 2019</span>
                </div>
              </a>
            </div>

            <div className="col-md-7">
              <a
                href="single.html"
                className="hentry img-2 v-height mb30 gradient"
              >
                <span className="post-category text-white bg-success">
                  Nature
                </span>
                <div className="text text-sm">
                  <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                  <span>February 12, 2019</span>
                </div>
              </a>

              <div className="two-col d-block d-md-flex">
                <a
                  href="single.html"
                  className="hentry v-height img-2 gradient"
                >
                  <span className="post-category text-white bg-primary">
                    Sports
                  </span>
                  <div className="text text-sm">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>
                <a
                  href="single.html"
                  className="hentry v-height img-2 ml-auto gradient"
                >
                  <span className="post-category text-white bg-warning">
                    Lifestyle
                  </span>
                  <div className="text text-sm">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span>February 12, 2019</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="site-section bg-lightx">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-5">
              <div className="subscribe-1 ">
                <h2>Subscribe to our newsletter</h2>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  nesciunt error illum a explicabo, ipsam nostrum.
                </p>
                <form action="#" className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
