import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Explore the NEWS</h1>
        <div className="footer-top-links-container">
          <div style={{ border: "none" }} className="links">
            <p>Home</p>
            <p className="link-padding-top">Music</p>
          </div>
          <div className="links">
            <p>Sports</p>
            <p className="link-padding-top">TV</p>
          </div>
          <div className="links">
            <p>Travel</p>
            <p className="link-padding-top">Weather</p>
          </div>
          <div className="links">
            <p>Future</p>
            <p className="link-padding-top">Worklife</p>
          </div>
          <div className="links">
            <p>Culture</p>
          </div>
        </div>
        <div className="footer-bottom-links-container">
          <p style={{ marginLeft: "0" }}>Terms of Use</p>
          <p>About the NEWS</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>Accessibility Help</p>
          <p>Parental Guidance</p>
          <p>Contact the BBC</p>
          <p>Get Personalised Newsletters</p>
          <p>Advertise with us</p>
        </div>
        <div className="bottom-info-footer">
          <p>AdChoices / Do Not Sell My Info</p>
          <p>
            Copyright © 2022 BBC. The BBC is not responsible for the content of
            external sites. Read about our approach to external linking.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
