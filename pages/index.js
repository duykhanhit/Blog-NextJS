import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import ListPost from "../components/ListPost";
import Subcribe from "../components/Subcribe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trang chủ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <Header />
        {/* <div className="site-section bg-light">
          <div className="container">
            <div className="row align-items-stretch retro-layout-2">
              <div className="col-md-4">
                <a
                  href="single.html"
                  className="h-entry mb-30 v-height gradient"
                >
                  <div className="text">
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
                <a href="single.html" className="h-entry v-height gradient">
                  <div className="text">
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a href="single.html" className="h-entry img-5 h-100 gradient">
                  <div className="text">
                    <div className="post-categories mb-3">
                      <span className="post-category bg-danger">Travel</span>
                      <span className="post-category bg-primary">Food</span>
                    </div>
                    <h2>
                      The AI magically removes moving objects from videos.
                    </h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="single.html"
                  className="h-entry mb-30 v-height gradient"
                >
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
                <a href="single.html" className="h-entry v-height gradient">
                  <div className="text">
                    <h2>The 20 Biggest Fintech Companies In America 2019</h2>
                    <span className="date">July 19, 2019</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div className="site-section">
          <div className="container">
            <ListPost />

            <div className="row text-center pt-5 border-top">
              <div className="col-md-12">
                <Pagination />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="site-section bg-light">
          <div className="container">
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

        <div className="site-section bg-lightx">
          <Subcribe />
        </div>
        <Footer />
      </div>
    </div>
  );
}
