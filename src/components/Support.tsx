"use client"
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Support extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='supp'>
        <div className="sub-main-secon">
            <div className='color-effect section-title'> Support </div>
                <div className='section-desc'> Support is available through <span className='color-effect-nontitle highlighted'> Discord Chat! </span></div>
                <div className='to-flex seryo-image'>
                <Image
                    className='support-image sp-image'
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    alt='front-logo'
                    src="/images/support-block.png"
                    width="1024" height="1024"
                    />
                <div className='section-desc'> Please contact <span className='color-effect-nontitle highlighted'> SQUIDICUZ </span> if it is urgent, or contact another admin to attempt to resolve your issue. <span className='color-effect-nontitle highlighted'> Thank you. </span> </div>
                </div>
                </div>
      </section>
    )
  }
}