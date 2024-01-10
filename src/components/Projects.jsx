import { Container, Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

export default function Project() {
  const projects = [
    {
      title: "Project",
      description: "description",
      imgURL: URL,
    },
    {
      title: "Project",
      description: "description",
      imgURL: URL,
    },
    {
      title: "Project",
      description: "description",
      imgURL: URL,
    },
    {
      title: "Project",
      description: "description",
      imgURL: URL,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Beginner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Advance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Master</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <p>{project.title}</p>;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Coming soon</Tab.Pane>
                <Tab.Pane eventKey="third">Coming soon</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
