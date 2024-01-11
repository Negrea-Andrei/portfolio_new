import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Card from "./Card";
import background2 from "../assets/img/color-sharp2.png"
import placeholder from "../assets/img/placeholder.png"

export default function Project() {
  const projects = [
    {
      title: "Project",
      description: "description",
      imgURL: placeholder,
    },
    {
      title: "Project",
      description: "description",
      imgURL: placeholder,
    },
    {
      title: "Project",
      description: "description",
      imgURL: placeholder,
    },
    {
      title: "Project",
      description: "description",
      imgURL: placeholder,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">           
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                        return(
                      <Card key={index} {...project} />);
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={background2} alt="projects-background" className='background-image-left'/>
    </section>
  );
}
