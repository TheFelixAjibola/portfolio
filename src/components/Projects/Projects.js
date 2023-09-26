import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Movie Discovery"
              description="A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies."
              ghLink="https://github.com/TheFelixAjibola/frontend-movielist"
              demoLink="http://frontend-movielist-stage-two.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="GeraldKings"
              description="A Website build for an Oil Company in Port Harcourt using HTML and CSS."
              ghLink="https://github.com/TheFelixAjibola/geraldkings"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="The Great Provider"
              description="A website built for a church using HTML and CSS"
              ghLink="#"
              demoLink="https://tgp.org.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Megaklin Technologies"
              description="A Website built for a security company using HTML and CSS"
              ghLink="https://github.com/TheFelixAjibola/megaklintechnologies"
              demoLink="https://megaklintechnologies.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="NetFlix Clone"
              description="A clone of NetFlix built with HTML CSS and Vanilla JavaScript"
              ghLink="https://github.com/TheFelixAjibola/Netflix"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
