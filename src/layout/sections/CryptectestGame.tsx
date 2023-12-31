"use client";
import React, { Component } from "react";
import Image from "next/image";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
type Props = {};
type State = {};
export default class Cryptectest extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section
        id="cryptechtest"
        className="cryptechtest-container"
        data-color="rgb(123, 143, 252)"
      >
        <div className="to-width to-flex to-height to-center to-column to-align">
          <div className="to-flex">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="title-cryptech">
                <div className="text-motion section-title project-title to-tertiary">
                  {" "}
                  CRYPTECHTEST GAME{" "}
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                className="section-desc"
              >
                {" "}
                Community-driven{" "}
                <a href="https://www.minetest.net/" target="_blank">
                  <span className="we-logo-third to-bold">Minetest Game</span>
                </a>{" "}
                with endless possibilities. Join us and embark on a journey of
                creativity, collaboration, and adventure in our immersive world.
              </div>
              <div className="to-flex to-gap-1">
                <a
                  className="project-button to-tertiary"
                  href="https://cryptechtest.xyz/"
                  target="_blank"
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <SportsEsportsOutlinedIcon /> Join Us!
                    </button>
                  </div>
                </a>
                <a
                  className="project-button to-tertiary"
                  href="https://github.com/CryptechTest"
                  target="_blank"
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <GitHubIcon /> Github
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="we-do-container">
              <Image
                className="ships"
                // data-aos="fade"
                // data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
                alt="ships"
                src="/images/ship-2.webp"
                width="750"
                height="750"
              />
            </div>
          </div>
          <div>
            <div
              data-aos="fade-bottom"
              data-aos-duration="1500"
              className="to-width carousel-container"
            >
              <div className="carousel">
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/1.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/2.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/3.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/4.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/5.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/6.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/1.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/2.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/3.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/4.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/5.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
                <div className="to-back">
                  <Image
                    alt="ships"
                    className="squid-anim"
                    src="/images/6.webp"
                    width="3620"
                    height="1969"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Image
        className="sales-land-pic reflect to-baks"
        alt="front-logo"
        src="/images/to-lefts.webp"
        width="3620"
        height="1377"
      />

                     <Image
        className="sales-land-pic reflect to-baks"
        alt="front-logo"
        src="/images/to-rights.webp"
        width="3620"
        height="1377"
      /> */}

        {/* <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/sales-312.webp"
      width="3620" height="1671"
      />
   <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/sales-2.webp"
      width="3620" height="1671"
      /> */}
      </section>
    );
  }
}
