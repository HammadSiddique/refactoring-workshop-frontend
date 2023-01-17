import React from "react"
import "./slider.css"

const slides = [
  {
    image: "../images/slide/slide1.png",
  },
  { image: "../images/slide/slide2.png" },
  { image: "../images/slide/slide3.png" },
  { image: "../images/slide/slide4.png" },
]

export const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          {slides.map((slide)=>(
              <div className="box">
                <div className="img">
                  <img src={slide.image} alt="" />
                </div>
               </div>
          ))}
        </div>
      </div>
    </>
  )
}
