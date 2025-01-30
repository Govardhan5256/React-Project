import React, { useState } from 'react'
import Carousel from './Carousel';

function Cards() {
    const [loader, setLoader] = useState(false);
    let array = [1, 2, 3, 4, 5,6,7,8,9,10,11];
    let card ={}
    let goSomeWhere = ()=>{
        setLoader(true)
    }
  return (
    <div>
        <div className="App" style={{marginLeft:'40px',display:'flex',flexDirection:'row',gap:'10px',flexWrap:'wrap'}}>
      {array.map((arr) => {
        return (
          <div >
            <div className="card" style={{ width: "8rem" }}>
              <img src={'https://wallpapercave.com/wp/wp13058420.jpg'} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                <a href="#" className="btn btn-primary" onClick={goSomeWhere} style={{marginRight:'10px'}}>
                {loader}
                download
                </a>
                <a href="#" className="btn btn-primary" onClick={goSomeWhere} style={{width:'100px'}}>
                {loader}
                watch
                </a> 
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Cards