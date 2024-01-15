import React, { useEffect, useState } from "react";
import "./Projects.css";
import Navbars from "../../Components/Navbars/Navbars";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

import products_img_1 from "../Image/1.jpg";
import products_img_2 from "../Image/Novus-Bank.jpg";
import products_img_3 from "../Image/3.jpg";
import products_img_4 from "../Image/2.jpg";
import products_img_5 from "../Image/Outdoor.jpg";

const Projects = () => {
  return (
    <React.Fragment>
      <Navbars />
      <div className="Projects_container">
        <div className="projects">
          <h3 className="big_project">Big Projects</h3>

          <div className="projects_row">
            <div className="projects_cart">
              <img className="cart_img" src={products_img_1} alt="" />
              <div className="cart_text">
                <p> HTML CSS </p>
                <p>Puupy-Figma </p>
                <p> Find your flag </p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href=" https://github.com/AzizjonIT/puupyfigma-media."
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://puupyfigma-media.netlify.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* 2 - cart */}

            <div className="projects_cart">
              <img className="cart_img" src={products_img_2} alt="" />
              <div className="cart_text">
                <p> REACT.JS CSS JSON-SERVER </p>
                <p>Novus Bank </p>
                <p> Online Credit</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/my-app"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://my-app-jv7q.vercel.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* 3 - cart */}

            <div className="projects_cart">
              <img className="cart_img" src={products_img_3} alt="" />
              <div className="cart_text">
                <p> REACT-JS CSS </p>
                <p>Construction-tools </p>
                <p> Online shop</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/construction-tools"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://construction-tools.vercel.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* 4 - CART  */}

            <div className="projects_cart">
              <img className="cart_img" src={products_img_4} alt="" />
              <div className="cart_text">
                <p>HTML CSS </p>
                <p>Toystore Figma </p>
                <p>Toystore Website</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/toystore"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://toystoremedia.netlify.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* 5 - cart */}

            <div className="projects_cart">
              <img className="cart_img" src={products_img_5} alt="" />
              <div className="cart_text">
                <p>HTML CSS </p>
                <p>Outdoor Voices </p>
                <p>Outdoor Voices Website</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/3-FIGMA-RACT"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://3-react-figma.netlify.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="Small_project">Small Projects</h3>

          <div className="small_projects_row">
            <div className="small_projects_cart">
              <div className="cart_text">
                <p> HTML CSS </p>
                <p> Calculator </p>
                <p> Calculator-apple</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/CALCULATOR-APPLE"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://calculator-apple-js.netlify.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            <div className="small_projects_cart">
              <div className="cart_text">
                <p> HTML CSS </p>
                <p>CUBE-ANIMATSA </p>
                <p> CUBE</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/CUBE-ANIMATSA"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://cube-animatsa.netlify.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>

            <div className="small_projects_cart">
              <div className="cart_text">
                <p> HTML CSS </p>
                <p> Tasbex-uz </p>
                <p> Tasbex</p>
                <div className="cart_but">
                  <a
                    className="cart_button"
                    href="https://github.com/AzizjonIT/tasbex-uz"
                  >
                    Code
                  </a>
                  <a
                    className="cart_button"
                    href="https://uz-tasbex.netlify.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
