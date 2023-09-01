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
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
              className="contacts-container-7 contacts-container"
            >
              <Image
                className="contact-mug"
                alt="front-logo"
                src="/images/vani-1.webp"
                width="512"
                height="512"
              />
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
                    href="https://discord.com/users/426261793426636804"
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
                    href="mailto:baydroid@cryptech.services"
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
    );
  }
}