import React from "react";
import Monthly from "../images/monthly.png";
import Yearly from "../images/monthly.png";
import Recharge from "../images/recharge.png";
import Phone from "../images/phone.png";

const PlanAndPricing = () => {
  return (
    <div id="plan">
      <h1 className="plan_heading">Plan And Pricing</h1>

      <div className="plan_card">
        <h2 className="plan_card_heading">TRULY UNLIMITED YEARLY PLAN</h2>
        <div className="benefit_img">
          <img src={Yearly} alt="" />
        </div>
      </div>
      <div className="plan_card">
        <h2 className="plan_card_heading">TRULY UNLIMITED MONTHLY PLAN</h2>
        <div className="benefit_img">
          <img src={Monthly} alt="" />
        </div>
      </div>
      <div className="plan_card">
        <h2 className="plan_card_heading">RECHARGE AND USE PLAN</h2>
        <div className="benefit_img">
          <img src={Recharge} alt="" />
        </div>
      </div>
      <div className="plan_card">
        <h2 className="plan_card_heading">
          KYC documents to achieve IVR number
        </h2>

        <ul className="kyc">
          <li>
            <i class="fa-solid fa-chevron-right"></i> Adhaar card Mandatory
          </li>
          <li>
            <i class="fa-solid fa-chevron-right"></i> Company ID & Address proof
          </li>
          <li>
            <i class="fa-solid fa-chevron-right"></i> Self-attested Photograph
            on behalf of the organistion.
          </li>
        </ul>
        <div className="more_info">
          <h1>FORE MORE INFO <a href="tel: +91 7982 755 571"><img src={Phone} alt="" />+91 7982 755 571</a></h1>
        </div>
      </div>
    </div>
  );
};

export default PlanAndPricing;
