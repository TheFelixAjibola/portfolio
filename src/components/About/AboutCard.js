import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Felix Ajibola </span>
            from <span className="purple"> Osun State, Nigeria.</span>
            <br />
            <br />
            I’m a Frontend Developer with a lifetime of passion for creating
            user interfaces and web applications through coding. My skills
            include HTML, CSS, JavaScript, and ReactJS. I’m always eager to
            learn new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Felix</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
