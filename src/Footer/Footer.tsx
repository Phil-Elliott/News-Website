import React from "react"
import "./Footer.scss"

const Footer = ({ change }: { change: any }) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Explore the NEWS</h1>
        <div
          className="footer-top-links-container"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div style={{ border: "none" }} className="links">
            <p
              onClick={() => change("home", "home")}
              style={{ marginLeft: "0" }}
            >
              Home
            </p>
            <p
              onClick={() => change("articles", "music")}
              className="link-padding-top"
              style={{ marginLeft: "0" }}
            >
              Music
            </p>
          </div>
          <div className="links">
            <p onClick={() => change("articles", "sports")}>Sports</p>
            <p
              onClick={() => change("articles", "TV")}
              className="link-padding-top"
            >
              TV
            </p>
          </div>
          <div className="links">
            <p onClick={() => change("articles", "travel")}>Travel</p>
            <p
              onClick={() => change("articles", "weather")}
              className="link-padding-top"
            >
              Weather
            </p>
          </div>
          <div className="links">
            <p onClick={() => change("articles", "future")}>Future</p>
            <p
              onClick={() => change("articles", "worklife")}
              className="link-padding-top"
            >
              Worklife
            </p>
          </div>
          <div className="links">
            <p onClick={() => change("articles", "culture")}>Culture</p>
          </div>
        </div>
        <div
          className="footer-bottom-links-container"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
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
