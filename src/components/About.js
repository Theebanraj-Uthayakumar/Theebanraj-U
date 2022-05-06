import React, { useState } from "react";
import Container from "@mui/material/Container";
// import AOS from "aos";
// import "aos/dist/aos.css";

function About() {
  return (
    <Container>
      <div className="aboutus">
        <h1 className="numbered-heading headingColor">About Me</h1>
        <div className="row">
          <div className="column1">
            <div className="kNIdQM">
              <div>
                <p>
                  Hey! Its me Theeban, Following BSc(Hons) in Information
                  Techonology specialization in Software Engineering in Facult
                  of Computing at Sri Lankan Institute in Infromation
                  Techonology(SLIIT). Passionate, forward looking software
                  engineering undergraduate with 2 years of experience in
                  creating and executing innovative software solutions with a
                  hands-on high energetic approach and well developed skills as
                  a junior Web and Mobile App Developer. An empathetic team
                  player and an innovative thinker whose looking to Perdue a
                  successful career in the field of Software development. I'm
                  excited to mention my career experience that with Aarthy HqC
                  and Freelance with have multiple task like Mayuraa
                  Matrinonial, The Rooster King Restaurant, Easy4ad and Global
                  Wings Charity etc. <br />
                  Here are a few technologies I’ve been working with recently:
                </p>
              </div>
              <ul className="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>PHP</li>
                <li>React JS</li>
                <li>MySQL</li>
                <li>React Native</li>
                <li>WordPress</li>
                <li>Node.js</li>
                <li>Azure DevOps</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="column2">
            <div className="about__StyledPic-sc-1ownso9-2 iTdkQf">
              <div className="wrapper">
                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained img">
                  <div style={{ maxWidth: "500px", display: "block" }}>
                    <img
                      alt="image"
                      role="presentation"
                      aria-hidden="true"
                      src="./Image/profile.JPG"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      opacity: "0",
                      transition: "opacity 500ms linear 0s",
                      backgroundColor: "#64ffda",
                      position: "absolute",
                      inset: "0px",
                      objectFit: "cover",
                    }}
                  ></div>
                  <picture>
                    <source
                      type="image/avif"
                      srcSet="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ minWidth: "500px 500px 100vw" }}
                    ></source>
                    <source
                      type="image/avif"
                      srcSet="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ minWidth: "500px 500px 100vw" }}
                    ></source>
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
