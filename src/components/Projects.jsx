import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Card from "./Card";
import pokemon from "../assets/img/pokemon-game.png";
import CV from "../assets/img/CV.jpg";
import placeholder from "../assets/img/placeholder.png";
import TODO from "../assets/img/TODO.png";

export default function Project() {
  const projects = [
    {
      title: "Pokemon game",
      description:
        "The Pokemon Memory Game is a web application built using Next.js, React, and the PokeAPI. It provides a fun and interactive way for users to test their memory by matching Pokemon images in a grid.",
      imgURL: pokemon,
      URL: "https://pokemon-memory-game-pi.vercel.app/",
    },
    {
      title: "Resume maker",
      description:
        "The CV App is a web application built using Vite and React that allows users to easily create and edit their professional CVs. Users can input their general information, add a short description, list their educational background, work experience, and skills to generate a well-structured CV.",
      imgURL: CV,
      URL: "https://cv-app-fawn.vercel.app/",
    },
    {
      title: "Todo list",
      description: "The TODO App is a web application designed to help users efficiently manage their projects and tasks. The application provides a straightforward interface for creating, viewing, and organizing projects and associated tasks.",
      imgURL: TODO,
      URL: "https://negrea-andrei.github.io/TODO/",
    },
    {
      title: "Project",
      description: "Coming soon",
      imgURL: placeholder,
      URL: "https://www.youtube.com/watch?v=YSNsZQf_CPM",
    },
    {
      title: "Project",
      description: "Coming soon",
      imgURL: placeholder,
      URL: "https://www.youtube.com/watch?v=YSNsZQf_CPM",
    },
    {
      title: "Project",
      description: "Coming soon",
      imgURL: placeholder,
      URL: "https://www.youtube.com/watch?v=YSNsZQf_CPM",
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
                      return <Card key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
