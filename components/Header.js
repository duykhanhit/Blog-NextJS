import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="site-navbar" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 search-form-wrap js-search-form">
            <form method="get" action="#">
              <input
                type="text"
                id="s"
                className="form-control"
                placeholder="Search..."
              />
              <button className="search-btn" type="submit">
                <span className="icon-search"></span>
              </button>
            </form>
          </div>

          <div className="col-4 site-logo">
            <Link href="/">
              <a className="text-black h2 mb-0">HDK Blog</a>
            </Link>
          </div>

          <div className="col-8 text-right">
            <nav className="site-navigation" role="navigation">
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block mb-0">
                <li>
                  <a href="category.html">Home</a>
                </li>
                <li>
                  <a href="category.html">Politics</a>
                </li>
                <li>
                  <a href="category.html">Tech</a>
                </li>
                <li>
                  <a href="category.html">Entertainment</a>
                </li>
                <li>
                  <a href="category.html">Travel</a>
                </li>
                <li>
                  <a href="category.html">Sports</a>
                </li>
                <li className="d-none d-lg-inline-block">
                  <a href="#" className="js-search-toggle">
                    <span className="icon-search"></span>
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
