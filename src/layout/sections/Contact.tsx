"use client"
import Image from 'next/image'
import React, { Component } from 'react'
type Props = {}
type State = {}
export default class Support extends Component<Props, State> {
state = {}
render() {
return (
<section className='support-container' id="sales" >
   <div className="to-width to-height to-center to-flex-column">
      <div className='to-left'>
         {/* 
         <div className='text-motion section-title-logo to-quinary'> ❖ </div>
         */}
         <div className='text-motion section-title to-quinary'> CRYPTECH SERVICES </div>
         <div className='section-desc'> For <span className='we-logo-fifth to-bold' >non-SECURITY</span> services we offer: </div>
      </div>
   </div>
   <Image
      className="sales-land-pic reflect"
      alt='front-logo'
      src="/images/sales11.png"
      width="3620" height="1377"
      />
</section>
)
}
}