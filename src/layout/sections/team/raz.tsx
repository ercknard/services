"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Raz extends Component<Props, State> {
  state = {};
  render() {
    return (
            <div
              data-aos="fade-down"
            //   data-aos-duration="750"
            //   data-aos-anchor-placement="bottom-bottom"
              className="contacts-container-8 contacts-container"
            >
                                  <div className="flip-card">
                                  <div className="flip-card-front to-raz">
        <div className="inner">
        <div className="to-raz-bg">
              <Image
                className="contact-mug to-mug s8"
                alt="front-logo"
                src="/images/raz-nobg-2.webp"
                width="512"
                height="512"
              />
              </div>
              <h3> RasAlGhul </h3>
              {/* <h4><span className="to-tertiary1">❖</span> Penetration Tester <span className="to-tertiary1">❖</span></h4> */}
              <h4> Developer </h4>
              <p className="to-tertiary1">
                        ❖
          </p>
              </div>
              </div>

<div className="flip-card-back to-raz">
        <div className="inner">
        <div className="to-raz-bg1">
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/raz.webp"
                width="512"
                height="512"
              />
              </div>
              <div className="details-bg">
                <div className="contact-name raz-name"> RasAlGhul </div>
                <div className="contact-description">
                  <ul>
                    <li className="raz-list"> Photograher </li>
                    <li className="raz-list"> Consultant </li>
                    <li className="raz-list"> Developer </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button raz"
                    href="https://discord.com/users/306288896516423680"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button raz t"
                    href="mailto:ras@cryptech.services"
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
              </div></div>
            </div>
    );
  }
}