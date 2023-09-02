"use client";
import React, { Component } from "react";
import Image from "next/image";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
type Props = {};
type State = {};
export default class Seqsee extends Component<Props, State> {
  state = {};
  render() {
    return (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container-3 contacts-container"
            >
                                  <div className="flip-card">
                                  <div className="flip-card-front">
        <div className="inner">
              <Image
                className="contact-mug to-mug"
                alt="front-logo"
                src="/images/jekz8.webp"
                width="512"
                height="512"
              />
              <h3> Jekz </h3>
              <h4> Penetration Tester </h4>
              <p className="to-tertiary1">
                        ❖
          </p>
              </div>
              </div>

<div className="flip-card-back to-jekz">
        <div className="inner">
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/jekz8.webp"
                width="512"
                height="512"
              />
              <div className="details-bg">
                <div className="contact-name seq-name"> Jekz </div>
                <div className="contact-description">
                  <ul>
                    <li className="seqsee-list"> Security Researcher </li>
                    <li className="seqsee-list"> Graphic Artist </li>
                    <li className="seqsee-list"> Penetration Tester </li>
                  </ul>
                </div>
                <div className="to-flex to-gap z">
                  <a
                    className="contact-button seqsee"
                    href="https://discord.com/users/943186466744463421"
                    target="_blank"
                  >
                    <div>
                      <button type="button" className="home-button-txt">
                        <ContactPageOutlinedIcon /> Discord
                      </button>
                    </div>
                  </a>
                  <a
                    className="contact-button seqsee t"
                    href="mailto:jekz@cryptech.services"
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