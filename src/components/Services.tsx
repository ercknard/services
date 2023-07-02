"use client"
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Services extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section>
        <div className="sub-main-secon">
            <div className='color-effect section-title'> Security Services </div>
          <div className='section-desc'> Estimated Quotes for <span className='color-effect-nontitle highlighted'> Security Services. </span></div>
          <div className='section-desc to-center'> <span className='color-effect-nontitle highlighted'> VPS Pentest </span> and <span className='color-effect-nontitle highlighted'> Web-Server Security Audit </span> </div>

          <div className='packages'>
            <div className='service-package-1'>
              <div className='service-package-sub'>
                <div className='contact-name-1'> Standard (1 time¹) ⇒ 0.055 BTC⁴ </div>
            <div className='contact-description'> <ul> <li> Report of Website Vulnerabilities and some basic resources to self-remedy any issues </li> <li> VPS Pentest and some basic resources to self-remedy any issues </li> <li></li> <li></li></ul> </div>
              </div>
              </div>
            <div className='service-package-2'>
               <div className='service-package-sub'>
            <div className='contact-name-1'> Deluxe (1 time¹) ⇒ 0.07 BTC⁴ </div>
              <div className='contact-description'> <ul> <li> Report of Website Vulnerabilities and some basic resources to self-remedy any issues </li> <li> VPS Pentest and some basic resources to self-remedy any issues </li>
              <li> Additional One on One support in remedying the security issues³ </li> <li></li></ul> </div>
              </div>
              </div>
            <div className='service-package-3'>
               <div className='service-package-sub'>
            <div className='contact-name-1'> Deluxe LTS (1 year²) ⇒ 0.15 BTC⁴ </div>
                <div className='contact-description'> <ul> <li> Monthly Report of Website Vulnerabilities and some basic resources to self-remedy </li> <li> Montly VPS Pentest </li> <li> Monthly list of CVEs for your server </li> <li> Monthly One on One support in remedying web-server and security issues³ </li></ul> </div>
                </div>
            </div>
          </div>
          </div>
      </section>
    )
  }
}