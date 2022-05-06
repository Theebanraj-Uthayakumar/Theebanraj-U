import React, { useState } from "react";
import Container from "@mui/material/Container";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function Home() {
  return (
    <div>
      <Container>
        <div className="eEjAsd">
          {" "}
          <div
            style={{
              fontSize: "16px",
              fontFamily: " Roboto Mono, monospace",
              transitionDelay: "100ms",
              color: "#64ffda",
            }}
          >
            Hi, my name is
          </div>
          <br />
          <span className="home-username" style={{ transitionDelay: "200ms" }}>
            Theebanraj U.
          </span>
          <span style={{ transitionDelay: "300ms" }}>
            I build things for the Web & Mobile.
          </span>
          <p>
            A skilled reliable Software engineer with a strong "can do"
            attitude. Writing code in various languages for solving problems,
            specialised in thinking outside the box to find Unique Solutions for
            difficult engineering problems. Likes to write about tech, coding
            and technologies.
          </p>
        </div>
      </Container>
      <About />
      <Work />
      <Contact />

      <div className="side__StyledSideElement-sc-1duznzb-0 hOvuuP">
        <ul className="social__StyledSocialList-anu6nt-0 dVLQAC fade-enter-done">
          <li>
            <a href="https://github.com/Theebanraj-Uthayakumar">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theebanraj-uthayakumar-5429b3197/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/theebanraj_uthayakumar/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/thee.theeban.3/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Theebanraj10">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="side__StyledSideElement-sc-1duznzb-0 iKeBGp">
        <ul>
          <li>
            <a href="https://github.com/Theebanraj-Uthayakumar">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theebanraj-uthayakumar-5429b3197/">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/theebanraj_uthayakumar/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/thee.theeban.3/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Theebanraj10">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="side__StyledSideElement-sc-1duznzb-0 jSIwrL">
        <div className="email__StyledLinkWrapper-sc-2epoq-0 jJFfEJ fade-enter-done">
          <a
            href="mailto:theebanrajuthaykumar10@gmail.com"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              marginBottom: 5,
            }}
          >
            theebanrajuthayakumar10@gmail.com
          </a>
        </div>
      </div>
      <footer className="footer__StyledFooter-sc-4jwnt4-0 earxGk">
        <div className="footer__StyledCredit-sc-4jwnt4-2 fLSMpu">
          <div>Designed & Built by Theebanraj Uthayakumar</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
