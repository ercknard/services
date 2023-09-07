"use client";
import Image from "next/image";
import React, { Component } from "react";
import AllScripts from "@/layout/components/scripts";
import FacebookIcon from '@mui/icons-material/Facebook';
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
type Props = {};
type State = {};
export default class Landing extends Component<Props, State> {
  state = {};
  render() {
    return (
      <>
        <section id="particles-js">
          <AllScripts />
        </section>
        <section
          id="home"
          className="landing-container"
          data-color="rgb(44, 104, 208)"
        >
          <Image
            priority={true}
            id="secondary-front-bgs"
            className="back-land-pic bgs-sen"
            alt="front-logo"
            src="/images/back-6566-a.webp"
            width="3620"
            height="1671"
          />
          <div
            id="shadow-front-bg"
            className="to-width to-height to-center home-specs"
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
              className="home-welcome-border"
            >
              <div className="home-welcome-message">
                <div className="home-message-size text-motion to-tertiary"> ❖ </div>
                <div className="home-message-size"> Welcome to </div>
                <div className="color-effect home-message-size">CRYPTECH SERVICES </div>
                <p className="tagline"> Unlocking Tomorrow`s Digital Frontier with Cryptech Services: Your Vision, Our Expertise. </p>
                <div className="land-icons"><CurrencyBitcoinOutlinedIcon className="land-size we-logo-first"/><PrecisionManufacturingOutlinedIcon className="land-size we-logo-second"/><ShieldOutlinedIcon className="land-size we-logo-third"/><DesignServicesOutlinedIcon className="land-size we-logo-fourth"/><SupportAgentOutlinedIcon className="land-size we-logo-fifth"/></div>
              </div>
            </div>
          </div>
          <Image
            priority={true}
            quality={100}
            id="primary-front-bgs"
            className="front-land-pic bgs-sen"
            alt="front-logo"
            src="/images/frontsss-a.webp"
            width="3620"
            height="1671"
          />
          <Image
            priority={true}
            id="secondary-front-bg"
            className="mids-land-pic to-glow"
            alt="front-logo"
            src="/images/moon-a.webp"
            width="3620"
            height="1671"
          />
          <Image
            id="finalbg"
            className="mid-land-pic l"
            alt="front-logo"
            src="/images/land-7.png"
            width="3620"
            height="2969"
          />

          <Image
            priority={true}
            id="tertiary-front-bg"
            className="mids-land-pic to-ser bgs-sen"
            alt="front-logo"
            src="/images/bgs.webp"
            width="3620"
            height="1671"
          />
          <Image
            id="tertiary-front-bgs"
            className="foots-land-pic bgs-sen"
            alt="front-logo"
            src="/images/footer-a.webp"
            width="3620"
            height="1671"
          />
          <Image
            className="foots-land-pic bgs-sen"
            alt="front-logo"
            src="/images/footer.webp"
            width="3620"
            height="1671"
          />
          <div id="shadow-front-bground" className="bgs-sen">
            <div className="landing-shadow" />
          </div>
          <AllScripts />
        </section>
      </>
    );
  }
}
