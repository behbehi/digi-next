"use client"
import Image from 'next/image'
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Gallery = () => {
  return (
    

      <Carousel className="pt-20 w-9/12 pr-3">

        <div>
          <img src="/img1.jpg" />
        </div>

        <div>
          <img src="/img2.jpg"  />
        </div>

        <div>
          <img src="/img3.jpg"  />
        </div>

      </Carousel>
  

  );
}

export default Gallery