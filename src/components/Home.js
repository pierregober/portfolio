import React from "react";

import "./home.css";
import "./homeButton.scss";
import "./homeHello.scss";

function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <p class="text">
            <span class="text__first">
              <span class="text__word first-word">
                <h1>
                  <div class="content">
                    <div class="content__container">
                      <p class="content__container__text">Hello</p>
                      <ul class="content__container__list">
                        <li class="content__container__list__item">world !</li>
                        <li class="content__container__list__item">bob !</li>
                        <li class="content__container__list__item">users !</li>
                        <li class="content__container__list__item">
                          everybody !
                        </li>
                      </ul>
                    </div>
                  </div>
                </h1>
                <h1>I'm Pierre,</h1>
                <h1>software developer</h1>
              </span>
              <span class="text__first-bg"></span>
            </span>
            <br />
            <span class="text__second">
              <h2>
                <span class="text__word second-word">
                  Full Stack Development / React Expert / Freelancer
                </span>
              </h2>
              <span class="text__second-bg"></span>
            </span>
          </p>
          <button class="btn btn-gradient">CONTACT ME</button>
        </div>
      </div>
    </>
  );
}
export default Home;
