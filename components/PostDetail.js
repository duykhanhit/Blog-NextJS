import Head from "next/head";
import React from "react";
import Author from "./Author";
import Header from "./Header";
import ListCategory from "./ListCategory";
import ListComment from "./ListComment";
import ListPopularPost from "./ListPopularPost";
import ListTag from "./ListTag";

export default function PostDetail() {
  return (
    <div>
      <Head>
        <title>Chi tiết bài viết</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="site-cover site-cover-sm same-height overlay single-page">
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="post-entry text-center">
                <span className="post-category text-white bg-success mb-3">
                  Nature
                </span>
                <h1 className="mb-4">
                  <a href="#">
                    The AI magically removes moving objects from videos.
                  </a>
                </h1>
                <div className="post-meta align-items-center text-center">
                  <figure className="author-figure mb-0 mr-3 d-inline-block">
                    <img
                      src="https://picsum.photos/200/200"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <span className="d-inline-block mt-1">
                    By Carrol Atkinson
                  </span>
                  <span>&nbsp;-&nbsp; February 10, 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries element-animate">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="post-content-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium nam quas inventore, ut iure iste modi eos adipisci
                  ad ea itaque labore earum autem nobis et numquam, minima eius.
                  Nam eius, non unde ut aut sunt eveniet rerum repellendus
                  porro.
                </p>
                <p>
                  Sint ab voluptates itaque, ipsum porro qui obcaecati cumque
                  quas sit vel. Voluptatum provident id quis quo. Eveniet
                  maiores perferendis officia veniam est laborum, expedita fuga
                  doloribus natus repellendus dolorem ab similique sint eius
                  cupiditate necessitatibus, magni nesciunt ex eos.
                </p>
                <p>
                  Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at
                  earum assumenda similique ut? Aperiam vel aut, ex
                  exercitationem eos consequuntur eaque culpa totam, deserunt,
                  aspernatur quae eveniet hic provident ullam tempora error
                  repudiandae sapiente illum rerum itaque voluptatem. Commodi,
                  sequi.
                </p>
                <img
                  src="https://picsum.photos/1080/720"
                  alt="Image placeholder"
                  className="img-fluid rounded"
                />
                <div className="row mb-5 mt-5">
                  <div className="col-md-12 mb-4">
                    <img
                      src="https://picsum.photos/400/200"
                      alt="Image placeholder"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <img
                      src="https://picsum.photos/400/200"
                      alt="Image placeholder"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <img
                      src="https://picsum.photos/400/200"
                      alt="Image placeholder"
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <p>
                  Quibusdam autem, quas molestias recusandae aperiam molestiae
                  modi qui ipsam vel. Placeat tenetur veritatis tempore quos
                  impedit dicta, error autem, quae sint inventore ipsa quidem.
                  Quo voluptate quisquam reiciendis, minus, animi minima eum
                  officia doloremque repellat eos, odio doloribus cum.
                </p>
                <p>
                  Temporibus quo dolore veritatis doloribus delectus dolores
                  perspiciatis recusandae ducimus, nisi quod, incidunt ut
                  quaerat, magnam cupiditate. Aut, laboriosam magnam, nobis
                  dolore fugiat impedit necessitatibus nisi cupiditate, quas
                  repellat itaque molestias sit libero voluptas eveniet omnis
                  illo ullam dolorem minima.
                </p>
                <p>
                  Porro amet accusantium libero fugit totam, deserunt ipsa,
                  dolorem, vero expedita illo similique saepe nisi deleniti.
                  Cumque, laboriosam, porro! Facilis voluptatem sequi nulla
                  quidem, provident eius quos pariatur maxime sapiente illo
                  nostrum quibusdam aliquid fugiat! Earum quod fuga id officia.
                </p>
                <p>
                  Illo magnam at dolore ad enim fugiat ut maxime facilis autem,
                  nulla cumque quis commodi eos nisi unde soluta, ipsa eius
                  aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga
                  accusamus dolor dolorem perspiciatis rerum hic, consectetur
                  error rem aspernatur!
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus magni explicabo id molestiae, minima quas assumenda
                  consectetur, nobis neque rem, incidunt quam tempore
                  perferendis provident obcaecati sapiente, animi vel expedita
                  omnis quae ipsa! Obcaecati eligendi sed odio labore vero
                  reiciendis facere accusamus molestias eaque impedit,
                  consequuntur quae fuga vitae fugit?
                </p>
              </div>

              <div className="pt-5">
                <p>
                  Categories: <a href="#">Food</a>, <a href="#">Travel</a> Tags:{" "}
                  <a href="#">#manila</a>, <a href="#">#asia</a>
                </p>
              </div>
              <div className="pt-5">
                <ListComment />
              </div>
            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      id="s"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box">
                <Author />
              </div>
              <div className="sidebar-box">
                <ListPopularPost />
              </div>

              <div className="sidebar-box">
                <ListCategory />
              </div>

              <div className="sidebar-box">
                <ListTag />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
