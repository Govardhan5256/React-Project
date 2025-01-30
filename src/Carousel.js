import React, { useState } from 'react'
import './Carousel.css'

function Carousel() {
  let images =["./images/37967.jpg","./images/25915.jpg","./images/37964.jpg","./images/37963.jpg","./images/37962.jpg","./images/37961.jpg","./images/37960.jpg","./images/37959.jpg","./images/37958.jpg","./images/37955.jpg"]
  const [count, setCount] = useState(0);

  const previous = () => {
    setCount((count) => (count > 0 ? count - 1 : images.length - 1));
  };

  const next = () => {
    setCount((count) => (count < images.length - 1 ? count + 1 : 0));
  };

  return (
 
     <div id="carouselExampleInterval" className="carousel " data-bs-ride="carousel"  >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" onClick={()=>setCount(0)}></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 2" onClick={()=>setCount((count) => (count < images.length - 1 ? count + 1 : 0))}></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 3" onClick={next}></button>
        </div>
        <div className="carousel-inner">
          {
            images.map(img=> <div className="carousel-item active  " data-bs-interval="10000" >
              <img src={images[count]}  alt="img1" style={{height:'400px',width:'100%', objectFit: 'fill'}} />
            </div>)
          }
        </div>
        <button className="carousel-control-prev" type="button"  data-bs-slide="prev" onClick={previous}>
          <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
          <span className="visually-hidden">Previous</span>
        </button>
    
          <button className="carousel-control-next" type="button"  data-bs-slide="next" onClick={next}>
            <span className="carousel-control-next-icon" aria-hidden="true" ></span>
            <span className="visually-hidden">Next</span>
          </button>
  
      </div>

  )
}

export default Carousel