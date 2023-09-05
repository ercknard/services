"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Vanikoro extends Component<Props, State> {
  state = {};
  render() {
    return (

            <div
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container-7 contacts-container"
            >
                    <div className="flip-card">

<div className="flip-card-front to-vani ">
        <div className="inner">
          <div className="to-vani-bg">
              <Image
                className="contact-mug to-mug"
                alt="front-logo"
                src="/images/vani-1-nobg.webp"
                width="512"
                height="512"
              />
              </div>
                        <h3>Vanikoro</h3>
                        {/* <h4><span className="to-octa1">❖</span> Developer <span className="to-octa1">❖</span></h4> */}
                        <h4> Developer </h4>
                        <p className="to-octa1">
                        ❖
          </p>
                </div>
              </div>
                    <div className="flip-card-back to-vani">
        <div className="inner">
        <div className="to-vani-bg1">
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/vani-1.webp"
                width="512"
                height="512"
              />
              </div>
              <div className="details-bg">
                <div className="contact-name vani-name"> Vanikoro</div>
                <div className="contact-description">
                  <ul>
                    <li className="vani-list"> Junior Developer</li>
                    <li className="no-list"> </li>
                    <li className="no-list"> </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button vani"
                    href="https://discord.com/users/500376620708659212"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button vani t"
                    href="mailto:vanikoro@cryptech.services"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <AlternateEmailOutlinedIcon /> Email
                      </button>
                    </div>
                  </a>
                </div>
                </div>
                </div>
              </div>
            </div>
            </div>
    );
  }
}