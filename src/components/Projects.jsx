import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Card from "./Card";
import polaroids from "../assets/img/polaroids.png"
import pokemon from "../assets/img/pokemon-game.png";
import courses from "../assets/img/courses.png"
import inventory from "../assets/img/inventory.png"
import rent from "../assets/img/rent_a'_car.png"
import portfolio from "../assets/img/portfolio_img.png"
import CV from "../assets/img/CV.jpg";
import placeholder from "../assets/img/placeholder.png";
import weather from "../assets/img/weather.png"
import TODO from "../assets/img/TODO.png";
import snake from "../assets/img/snake.png"

export default function Project() {
  const projects = [
    {
      title: "Online courses",
      description:
        "A webpage dedicated for online courses that was crafted using React, Javascript and Tailwind CSS for a modern looking website",
      imgURL: courses,
      URL: "https://courses-theta-ten.vercel.app/",
    },
    {
      title: "Rent A'Car",
      description:
        "A webpage dedicated for car rentals that was crafted using React, Javascript and Tailwind CSS with a dark mode for a modern looking website dedicated to car lovers",
      imgURL: rent,
      URL: "https://rent-a-car-wheat.vercel.app/",
    },
    {
      title: "Polaroids",
      description:
        "Polaroids is a React-based stock management web application designed for efficient organization and management of stock-related files.",
      imgURL: polaroids,
      URL: "https://polaroid-feb2e.web.app/",
    },
    {
      title: "Inventory",
      description:
        "This project is an inventory management system built using Node.js and Express. It provides functionality to manage categories, locations, manufacturers, and products within an inventory. The project uses a modular structure with separate controllers for each entity.",
      imgURL: inventory,
      URL: "https://andrei-inventory.onrender.com/store",
    },    
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
      title: "Weather",
      description: "This web application fetches real-time weather information based on user input for city and country. It utilizes the WeatherAPI to gather data and presents it in a user-friendly card format.",
      imgURL: weather,
      URL: "https://negrea-andrei.github.io/weather/",
    },
    {
      title: "Snake game",
      description: "This is a classic implementation of the snake game using HTML, CSS, and JavaScript. The game features a snake that moves around a grid, eating food to grow longer. Your goal is to collect as much food as possible without colliding with the boundaries of the game board or the snake's own body.",
      imgURL: snake,
      URL: "https://negrea-andrei.github.io/snake_game/",
    },
    {
      title: "Portfolio",
      description: "This platform showcases my skills, projects, and experience. The portfolio is built using Express and Node.js for the backend, Nodemailer for email functionality, and React with Bootstrap-React for the frontend.",
      imgURL: portfolio,
      URL: "https://andrei-negrea-contact.onrender.com/",
    }
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
