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
              An expertise in all stages of development (HTML, CSS, JavaScript,
              React, Webpack, MongoDB, Node.js, Express), I'm dedicated to
              driving innovation and crafting seamless digital experiences. A
              young, open-minded, always eager to learn and improve trailblazer
              who evolved from a deposit clerk to a tech virtuoso. I've switched
              from working with text and images to supporting IT and managing
              databases, showing that I can adapt and excel in different roles.
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
