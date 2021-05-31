import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="card category__card">
        <div className="category__card-img">
          <img src={props.img} className="img-fluid" alt="img" />
        </div>
        <div className="card-img-overlay category__card-body">
          <div className="category__card-body--item">
            <p className="category__card-date">{props.date}</p>
            <a href="#" className="category__card-link">
              {props.link}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
