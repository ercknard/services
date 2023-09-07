"use client";
import React, { Component } from "react";
import Image from "next/image";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
type Props = {};
type State = {};
export default class StackAudit extends Component<Props, State> {
  state = {};
  render() {
    return (
      <section
        className="services-container"
        id="audits"
        data-color="rgb(176, 117, 248)"
      >
                <div className="to-width to-flex to-height to-center to-column to-align">
          <div className="to-flex">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="title-audit">
                <div className="text-motion section-title project-title to-secondary">
                  {" "}
                  STACKOFSTAKE AUDIT{" "}
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-anchor-placement="bottom-bottom"
                className="section-desc"
              >
                {" "}
                Cryptech Services was contracted by{" "}
                <a href="https://kb.stackofstake.com/" target="_blank">
                  <span className="we-logo-second to-bold"> StackOfStake</span>
                </a>{" "}
                project to conduct a 
penetration test in order to determine its exposure to a targeted attack.
              </div>
              <div className="to-flex to-gap-1">
              <span className="to-audit"> View Audit Report :</span>
                <a
                  className="project-button to-secondary"
                  href="https://kb.stackofstake.com/wp-content/uploads/2020/11/stackofstake-com-audit-cryptech-services.pdf"
                  target="_blank"
                >
                  <div>
                    <button type="button" className="home-button-txt">
                      <VerifiedUserIcon /> Audit
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="we-do-container">
              <Image
                className="ships-stake"
                // data-aos="fade"
                // data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom"
                alt="ships"
                src="/images/audit1.png"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>

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
