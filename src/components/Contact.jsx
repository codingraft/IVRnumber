import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contact_heading">CONTACT</h1>
      <div className="foot_container">
        <div className="address">
          <p className="foot_phone">
            <a href="tel: +91 7982755571"><i class="fa-solid fa-phone"></i> +91 7982 755 571</a>
          </p>
          <p className="foot_phone">
            <a href="mailto: info@ivrnumber.com"><i class="fa-solid fa-envelope"></i> info@ivrnumber.com</a>
          </p>
          <p className="foot_phone ffs"><i class="fa-solid fa-building"></i> 
            Max Towers, Plot No.C-001A, 16th & 17th Floor, DND Flyway, Sector
            16B, Noida 201301, India
          </p>
        </div>

        <div className="form_container">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Mobile No." />

          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
