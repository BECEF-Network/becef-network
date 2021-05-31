import React from "react";

import Props from "./props";

import img from "../img/c-1.jpg";
import img2 from "../img/c-2.jpg";
import img3 from "../img/c-3.jpg";

export default function Category() {
  return (
    <section className="category">
      <div className="category__layer">
        <div className="container">
          <div className="col-12 mb-5">
            <h1 className="category__title">category 4</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 col-lg-4">
              <Props
                img={img}
                date="11 dec, 20"
                link=" Battle of the portable planar magnetic headphones"
              />
            </div>
            <div className="col-12 col-md-8 col-lg-4 my-5 my-lg-0">
              <Props
                img={img2}
                date="11 dec, 20"
                link=" Battle of the portable planar magnetic headphones"
              />
            </div>
            <div className="col-12 col-md-8 col-lg-4">
              <Props
                img={img3}
                date="11 dec, 20"
                link=" Battle of the portable planar magnetic headphones"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
