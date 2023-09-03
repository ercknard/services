"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Squid extends Component<Props, State> {
  state = {};
  render() {
    return (
                  <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container-1 contacts-container"
            >
                                  <div className="flip-card">
                                  <div className="flip-card-front to-boe">
        <div className="inner">
        <div className="to-boe-bg">
              <Image
                className="contact-mug to-mug"
                alt="front-logo"
                src="/images/valor3.webp"
                width="512"
                height="512"
              />
              </div>
              <h3>Boehmerang</h3>
              {/* <h4><span className="to-primary1">❖</span> Developer <span className="to-primary1">❖</span></h4> */}
              <h4> Developer </h4>
              <p className="to-primary1">
                        ❖
          </p>
              </div> </div>
<div className="flip-card-back to-boe">
        <div className="inner">
        <div className="to-boe-bg1">
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/valor3.webp"
                width="512"
                height="512"
              />
              </div>
              <div className="details-bg">
                <div className="contact-name squid-name"> Boehmerang </div>
                <div className="contact-description">
                  <ul>
                    <li className="squid-list"> CAD Designer </li>
                    <li className="squid-list"> Consultant </li>
                    <li className="squid-list"> Developer </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button squid"
                    href="https://discord.com/users/161986311832600576"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button squid t"
                    href="mailto:boehmerang@cryptech.services"
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