import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{ textAlign: "justify" }}
        >
          <p>
            Hi Everyone, I am <span className="purple">Felix Ajibola. </span>I
            live in{" "}
            <span className="purple"> Benin City, Edo State, Nigeria.</span>
          </p>
          <p>
            As a Frontend Developer with a lifelong passion for crafting user
            interfaces and web applications through code, I possess expertise in
            HTML, CSS, JavaScript, and ReactJS. My commitment to growth fuels my
            eagerness to embrace new technologies continually.
          </p>
          <p>
            As a Frontend Developer, I prioritize unwavering focus. To achieve
            this, I've curated a tranquil workspace where I can immerse myself
            in projects without interruptions. With soft background music and
            the occasional sip of freshly brewed coffee, I remain in the zone,
            consistently delivering my best design work day after day.
          </p>
          <p>In addition to coding, I also enjoy engaging in:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technical Training
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the mission of building things that leave a lasting,
            positive mark on the world."{" "}
          </p>
          <footer className="blockquote-footer">Felix Ajibola</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
