import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselCustom.css'
function CarouselCustom() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://brandongaille.com/wp-content/uploads/2019/02/101-Catchy-Slogans-for-Sunglasses.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Refreshing</h3>
      <p>Move with style, sunsets have never looked better!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtSQdjfcrf3gD3On72ea-aEyY2_k3A51V_A&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sunglasses for every occasion.</h3>
      <p>Classy is th way to go!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.thetechlounge.com/wp-content/uploads/2019/12/best-gaming-glasses.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Are you a gamer?</h3>
      <p>We can help you protect your eyes!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselCustom
