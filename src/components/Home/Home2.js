import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My Design <span className="purple"> Philosophy </span> 🥸
            </h1>
            <p className="home-about-body">
              Simplicity is my guiding principle! I firmly believe that
              achieving extraordinary designs can be accomplished through
              simplicity. In every project, my goal is to emphasize clarity and
              user-friendliness, meticulously crafting experiences that are both
              delightful and effortlessly intuitive.
              <br />
            </p>
            <div class="box">
              <div className="hire">Why Hire Me?</div>
              <h2>User-Centric Approach​</h2>
              <p>
                <ImPointRight /> Crafting designs that speak to your users’
                hearts.
              </p>
              <h2>Problem-Solving Superpowers​</h2>
              <p>
                <ImPointRight /> Design challenges? I’m here to solve problems
                and create intuitive solutions. Bring it on!
              </p>
              <h2>Pixel Perfection​</h2>
              <p>
                <ImPointRight /> Meticulous attention to detail ensures
                pixel-perfect designs that dazzle!
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ borderRadius: "2%", height: "90%", width: "90%" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TheFelixAjibola"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/TheFelixAjibola"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thefelixajibola"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thefelixajibola/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
