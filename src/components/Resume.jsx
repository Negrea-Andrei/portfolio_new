import { Col, Row } from "react-bootstrap";

export default function Resume() {
  const downloadDocument = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/13e7-qlTzvYu9mG3E1j3y_295VtiLlkVV/view?usp=sharing";
    link.setAttribute('download', 'Negrea_Andrei_CV.pdf');
    
    link.setAttribute('target', '_blank');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Col lg={12}>
        <div className="download-bx">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>
                Do you want to know more about me?<br /> Here is my resume
              </h3>
            </Col>
            <Col md={6} xl={6}>
              <div className="download-resume">
                <button onClick={downloadDocument}>
                  <span>Download</span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
}