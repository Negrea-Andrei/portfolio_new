import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../assets/img/header-img.svg";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my world!</span>
            <h1>
              Hey! I am Andrei!
              <br /><span className="space-color"> Web Developer</span>
            </h1>
            <p>
              Proficient in full-stack development (HTML, CSS, JavaScript, React, Webpack, MongoDB, Node.js, Express), 
              I'm dedicated to driving innovation and creating seamless digital experiences. As a young, open-minded 
              trailblazer, I've evolved from a deposit clerk to a tech virtuoso, demonstrating adaptability in roles 
              from text and images to IT support and database management. Passionate about building and problem-solving, 
              I am committed to continuous learning across various fields and technologies, consistently delivering creative 
              solutions in the ever-evolving tech landscape.
            </p>
          </Col>
          <Col xs={15} md={6} xl={5}>
            <img src={heroImg} alt="Hero img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
