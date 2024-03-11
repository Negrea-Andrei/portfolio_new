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
            <p>As a young and open-minded professional, I've crafted responsive websites with HTML, CSS, JavaScript, 
              and React for optimal user experiences across devices. I design, implement, and troubleshoot 
              features, ensuring high-quality code. Using Git for efficient collaboration, I stay 
              updated on industry trends, continuously improving my skills for competitiveness in the field.
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
