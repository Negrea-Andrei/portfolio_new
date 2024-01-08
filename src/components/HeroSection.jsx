import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons"
import heroImg from "../assets/img/header-img.svg"

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to mo Portfolio</span>
            <hi>
              {`Hey! I am Andrei`}
              <span className="wrap">Get to know me!</span>
            </hi>
            <p>
              An expertise in all stages of development (HTML, CSS, JavaScript,
              React, Webpack, MongoDB, Node.js, Express), I'm dedicated to
              driving innovation and crafting seamless digital experiences. A
              young, open-minded, always eager to learn and improve trailblazer
              who evolved from a deposit clerk to a tech virtuoso. I've switched
              from working with text and images to supporting IT and managing
              databases, showing that I can adapt and excel in different roles.
            </p>
            <button onClick={() => console.log('test') }>Let's talk more!<ArrowRightCircle size={25}></ArrowRightCircle></button>
          </Col>
          <Col xs={15} md={6} xl={5} >
            <img src={heroImg} alt="Hero img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}