import React from 'react'
import BenefitImg from '../images/benefits.png'

const Benefit = () => {
  return (
    <div id='benefit'>
      <h1 className="benefit">IVR Benefits</h1>

      <div className="benefit_img">
        <img src={BenefitImg} alt="" />
      </div>
      <div className="benefit_content">
        <ul className="benefit_list">
          <li><span>1.</span> Better customer experience.</li>
          <li><span>2.</span>Options presented clearly.</li>
          <li><span>3.</span>No more connection errors.</li>
          <li><span>4.</span>Faster processing.</li>
          <li><span>5.</span>More inbound calls.</li>
        </ul>
        <ul className="benefit_list">
          <li><span>6.</span>Improved costs.</li>
          <li><span>7.</span>Non-stop availabilty.</li>
          <li><span>8.</span>Brand connections.</li>
          <li><span>9.</span>Better mobile connection.</li>
          <li><span>10.</span>Free up employees for complex projects.</li>
        </ul>
      </div>

    </div>
  )
}

export default Benefit