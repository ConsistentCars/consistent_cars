import React from "react";
import Fast_Booking from "../images/icons/fast.png";
import Collection from "../images/icons/collection.png";
import Insurance from "../images/icons/insurance.png";
import Map from "../images/icons/map.png";
import Pay from "../images/icons/pay.png";
import Support from "../images/icons/support.png";

const Services = () => {
  return (
    <div>
      <section class="we-offer-area text-center bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-heading text-center">
                <h2 className="heading-service">
                  Why Choose<span> US</span>?
                </h2>
              </div>
            </div>
          </div>
          <div class="row our-offer-items less-carousel">
            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-pen-fancy">
                  <img src={Fast_Booking} alt="" className="icon-image" />
                </i>
                <h4>Fast & Easy Booking</h4>
                <p style={{ textAlign: "center" }}>
                  Book your ride in just a few clicks, with no hassle or delays.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-dharmachakra">
                  <img src={Map} alt="" className="icon-image" />
                </i>
                <h4>Any Pickup Location</h4>
                <p style={{ textAlign: "center" }}>
                  Choose your pickup spot, wherever you are in the city.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tasks">
                  <img src={Pay} alt="" className="icon-image" />
                </i>
                <h4>No Booking Charges</h4>
                <p style={{ textAlign: "center" }}>
                  Enjoy our services without paying any hidden fees.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-tachometer-alt">
                  <img src={Collection} alt="" className="icon-image" />
                </i>
                <h4>Free Maintenance</h4>
                <p style={{ textAlign: "center" }}>
                  All vehicles are maintained at no extra cost to you.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-recycle">
                  <img src={Insurance} alt="" className="icon-image" />
                </i>
                <h4>Fully Insured</h4>
                <p style={{ textAlign: "center" }}>
                  Drive worry-free with our comprehensive insurance coverage.
                </p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 equal-height">
              <div class="item">
                <i class="fas fa-headset">
                  <img src={Support} alt="" className="icon-image" />
                </i>
                <h4>24/7 Support</h4>
                <p style={{ textAlign: "center" }}>
                  Our team is here to assist you at any time, day or night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
