import {Col, Row} from "react-bootstrap"

export default function Resume() {
  return (
    <div>
      <Col lg={12}>
        <div className="download-bx">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>
                Do you want to know more about me?<br></br> Click right here!
              </h3>
            </Col>
            <Col md={3} xl={5}>
                <div className="download-resume">                 
                  <button><span>Download my CV</span></button>
                </div>
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
}
