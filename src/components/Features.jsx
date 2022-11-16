import React from 'react'

const Features = () => {
  return (
    <div id='features'>
      <h1 className="features_heading">IVR Features</h1>
      <div className="dotted_line">
        <div className="top_dot"></div>
        <div className="horizontal_dot"></div>
      </div>

      <div className="features_card_section">
        <div className="feat_card">
          <h4 className="feat_card_head">ADMIN</h4>

          <ul className="feat_list">
            <li><i class="fa-solid fa-circle"></i> Dashboard & Reports</li>
            <li><i class="fa-solid fa-circle"></i> Call Recordings</li>
            <li><i class="fa-solid fa-circle"></i> Multi-level IVR setting</li>
            <li><i class="fa-solid fa-circle"></i> Create Department/Agents with Office time mgmt</li>
            <li><i class="fa-solid fa-circle"></i> Live Call Facilities with Call Barger/Whisper</li>
            <li><i class="fa-solid fa-circle"></i> Contact mangement with Rescheduling & notes option</li>
            <li><i class="fa-solid fa-circle"></i> WhatsApp integeration</li>
            <li><i class="fa-solid fa-circle"></i> Live Agent Status</li>
          </ul>
        </div>
        <div className="feat_card">
          <h4 className="feat_card_head fff">AGENT</h4>

          <ul className="feat_list">
            <li><i class="fa-solid fa-circle"></i> Dashboard & Reports</li>
            <li><i class="fa-solid fa-circle"></i> Click-to-call facility</li>
            <li><i class="fa-solid fa-circle"></i> Contact mangement with Rescheduling & notes option</li>
            <li><i class="fa-solid fa-circle"></i> Live Call Facilities with conference/transfer & hangup</li>
            <li><i class="fa-solid fa-circle"></i> WhatsApp integeration</li>
            <li><i class="fa-solid fa-circle"></i> Live Agent Status</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features