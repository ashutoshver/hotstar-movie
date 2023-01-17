import React from 'react';

function Card(props) {
  return (
    <>
      <div className="cards">
        <a href={props.links} target="_blank">
          <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img" />
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.MovName}</h3>
              <a href={props.links} target= "_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}
export default Card;