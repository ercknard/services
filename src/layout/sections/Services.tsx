"use client";
import React, { Component } from "react";
import Image from "next/image";
type Props = {};
type State = {};
export default class Services extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section
        className="services-container"
        id="services"
        data-color="rgb(182, 67, 174)"
      >
        <div className="to-width to-height to-center to-flex-column">
          <div className="to-left">
            <div className="text-motion section-title-logo to-primary"> ❖ </div>
            <div className="title-security">
              <div className="text-motion section-title to-primary">
                {" "}
                SECURITY SERVICES{" "}
              </div>
            </div>
            <div className="section-desc-1">
              {" "}
              For <span className="we-logo-first to-bold">SECURITY</span>{" "}
              service packages we offer:{" "}
            </div>
          </div>
          <div className="packages">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
              className="service-package-1"
            >
              <div className="service-package-sub">
                <div className="contact-name-1 to-bold">
                  {" "}
                  Standard (1 time¹) ⇒{" "}
                  <span className="we-logo-first to-bold"> 0.015 BTC⁴ </span>
                </div>
                <div className="contact-description">
                  <ul>
                    <li className="squid-list">
                      {" "}
                      Report of Website Vulnerabilities and some basic resources
                      to self-remedy any issues.{" "}
                    </li>
                    <li className="squid-list">
                      {" "}
                      VPS Pentest and some basic resources to self-remedy any
                      issues.{" "}
                    </li>
                    {/* <li className='squid-list'></li>
                     <li className='squid-list'></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
              className="service-package-2"
            >
              <div className="service-package-sub">
                <div className="contact-name-1 to-bold">
                  {" "}
                  Deluxe (1 time¹) ⇒{" "}
                  <span className="we-logo-second to-bold"> 0.02 BTC⁴ </span>
                </div>
                <div className="contact-description">
                  <ul>
                    <li className="valor-list">
                      {" "}
                      Report of Website Vulnerabilities and some basic resources
                      to self-remedy any issues.{" "}
                    </li>
                    <li className="valor-list">
                      {" "}
                      VPS Pentest and some basic resources to self-remedy any
                      issues.{" "}
                    </li>
                    <li className="valor-list">
                      {" "}
                      Additional One on One support in remedying the security
                      issues³.{" "}
                    </li>
                    {/* <li className='valor-list'></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-anchor-placement="bottom-bottom"
              className="service-package-3"
            >
              <div className="service-package-sub">
                <div className="contact-name-1 to-bold">
                  {" "}
                  Deluxe LTS (1 year²) ⇒{" "}
                  <span className="we-logo-third to-bold"> 0.04 BTC⁴ </span>
                </div>
                <div className="contact-description">
                  <ul>
                    <li className="seqsee-list">
                      {" "}
                      Monthly Report of Website Vulnerabilities and some basic
                      resources to self-remedy.{" "}
                    </li>
                    <li className="seqsee-list"> Monthly VPS Pentest. </li>
                    <li className="seqsee-list">
                      {" "}
                      Monthly list of CVEs for your server.{" "}
                    </li>
                    <li className="seqsee-list">
                      {" "}
                      Monthly One on One support in remedying web-server and
                      security issues³.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2500"
              data-aos-anchor-placement="bottom-bottom"
              className="service-package-4"
            >
              <div className="service-package-sub">
                {/* <div className='contact-name-1 to-bold'> Legends: ⇒ <span className='we-logo-fourth to-bold'> (superscript) </span></div> */}
                <div className="contact-description">
                  <ul>
                    <li>
                      {" "}
                      ¹Final price may be adjusted or negotiated after review of
                      report(s).{" "}
                    </li>
                    <li>
                      {" "}
                      ²Additional Time may be arranged and allotted when
                      expiration time nears.{" "}
                    </li>
                    <li>
                      {" "}
                      ³Final price may be adjusted if hours of support exceed 8
                      hours.{" "}
                    </li>
                    <li> ⁴Currency denomination may be negotiated. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Image
          className="sales-2-land-pic"
          alt="front-logo"
          src="/images/observe-up-opac-3.png"
          width="3620"
          height="1671"
        /> */}

        {/* <Image
      className="sales-land-pic"
      alt='front-logo'
      src="/images/to-center.webp"
      width="3620" height="1377"
      /> */}

        {/* <Image
          className="sales-land-pic"
          alt="front-logo"
          src="/images/observe-down.png"
          width="3620"
          height="1671"
        /> */}

                <Image
          className="sales-1-land-pic"
          alt="front-logo"
          src="/images/observe-up.webp"
          width="3620"
          height="1377"
        />


      </section>
    );
  }
}
