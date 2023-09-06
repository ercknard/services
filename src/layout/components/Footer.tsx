"use client";
import React, { Component } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {};

type State = {};

export default class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="text-motion section-title-logo to-seventh team-title to-zdex">
              {" "}
              CRYPTECH ❖ SERVICES{" "}
            </div>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#offers">
              Offers
            </a>
          </li>
          {/* <li className="menu__item">
            <a className="menu__link" href="#sales">
              Services
            </a>
          </li> */}
          <li className="menu__item">
            <a className="menu__link" href="#services">
              Security
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#team">
              Team
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__link"
              href="https://metrix.place/"
              target="_blank"
            >
              Metrix.Place
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__link"
              href="https://cryptechtest.xyz/"
              target="_blank"
            >
              CryptechTest
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__link"
              href="http://www.freepik.com"
              target="_blank"
            >
              vectorpocket
            </a>
          </li>
        </ul>
        <p>&copy;2023 Cryptech Services | All Rights Reserved.</p>

        <Image
          className="sales-land-pic"
          alt="front-logo"
          src="/images/footer.webp"
          width="3620"
          height="1671"
        />
      </footer>
    );
  }
}
