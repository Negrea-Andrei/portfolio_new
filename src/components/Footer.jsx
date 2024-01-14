import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/andrei-negrea-49a669239/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Negrea-Andrei"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>© 2023 Negrea Ioan Andrei. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
