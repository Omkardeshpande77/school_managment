import React from "react";
import { BsCheck2Circle, BsCheckCircleFill } from "react-icons/bs";
import "../App.css";
import Carousel from "./Carousel";
function Home() {
  return (
    <>
      <main class="container home_top">
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        <div class="row align-items-center home_top_content">
          <div
            class="col-md-6   col-12 p-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1 className="head">Learning Today,</h1>
            <h1 className="head">Leading Tommorow </h1>
            <br />
            <a class="btn home_button p-3 text-white" href="#">
              Get Started
            </a>
          </div>
          <div
            class="col-md-6 col-12  "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Carousel />
          </div>
        </div>
      </main>
      <div className="main">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
          integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
          crossorigin="anonymous"
        />
        <div class="container my-3">
          <br />
          <br />
          <h2 class="about-heading">About Us</h2>
          <div class="row align-items-center">
            <div
              class="col-lg-6 col-md-6 order-2 order-md-1 mt-sm-0 opt-sm-0"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div class="row align-items-center">
                <div class="row">
                  <div class="col-lg-10 col-md-10">
                    <br />
                    <br />
                    <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="http://blueswanpublicschool.in/assets/img/pic/LEARN.jpg"
                        class="img-fluid h-50"
                        alt="Image"
                      />
                      <div class="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div class="col-lg-10 col-md-10 mt-2 pt-2">
                    <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNjaG9vbCUyMGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        class="img-fluid"
                        alt="Image"
                      />
                      <div class="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 col-md-6 col-12 order-1 order-md-2"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <div class="section-title ml-lg-5">
                <br />
                <br />
                <h4 class="title mb-4" style={{ fontSize: 29 }}>
                  "Blue Swan Public School" addressing the educational needs of
                  early childhood years by following developmentally appropriate
                  practices.
                </h4>

                <p class=" mb-0">
                  We at "Blue Swan Public School" celebrate childhood, through
                  the unique blend of international approaches amalgamated with
                  Indian culture.
                  <br />
                  <br />
                  <BsCheckCircleFill /> &nbsp; Blue Swan Public School brings a
                  perfect balance across the country with a tint of regional
                  touch so that a child connects its surroundings and local
                  environment instantly which makes it the best school for your
                  child.
                  <br />
                  <br />
                  <BsCheckCircleFill /> &nbsp;The child gets amused and happy to
                  express out what he/she has learned in school.
                  <br />
                  <br />
                  <BsCheckCircleFill /> &nbsp; That is why we say, India
                  celebrates childhood at Blue Swan Public School.
                  <br />
                  <br />
                  We at Blue Swan Public School believe in celebrating childhood
                  with the same intensity and love as you do for your child. The
                  2nd home of your child, where he/she learns the external world
                  through our own teaching methodology. Blue Swan Public School
                  brings a perfect balance across the country with a tint of
                  regional touch so that a child connects its surroundings and
                  local environment instantly which makes it the best school for
                  your child.
                </p>
              </div>
              <div class="col-12">
                <div class="my-3 pt-2 text-right">
                  <a
                    href="javascript:void(0)"
                    class="btn home_button"
                    style={{ borderRadius: "20px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;