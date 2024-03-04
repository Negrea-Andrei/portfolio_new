import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import web_development from "../assets/img/icons/web_development_logo.svg"
import react_logo from "../assets/img/icons/react_logo.svg"
import javascript_logo from "../assets/img/icons/javascript_logo.svg"
import git_logo from "../assets/img/icons/git_logo.svg"
import tailwind_logo from "../assets/img/icons/tailwind_logo.svg"
import sql_logo from "../assets/img/icons/sql_logo.svg"
import mongodb_logo from "../assets/img/icons/mongodb_logo.svg"
import node_js_logo from "../assets/img/icons/node_js_logo.svg"
import firebase_logo from "../assets/img/icons/firebase_logo.svg"
import jira_logo from "../assets/img/icons/jira_logo.svg"
import webpack_logo from "../assets/img/icons/webpack_logo.svg"
import 'react-multi-carousel/lib/styles.css';

export default function SkillsSection() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className='skill' id='skills'>
            <Container>
                <Row> 
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                                <img src={web_development} alt='web_development_logo'/>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={react_logo} alt='react_logo'/>
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <img src={javascript_logo} alt='javascript'/>
                                <h5>Javascript</h5>
                            </div>                            
                            <div className='item'>
                                <img src={tailwind_logo} alt='tailwind_logo'/>
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className='item'>
                                <img src={webpack_logo} alt='webpack_logo'/>
                                <h5>Webpack</h5>
                            </div>
                            <div className='item'>
                                <img src={node_js_logo} alt='node_js'/>
                                <h5>Node.JS</h5>
                            </div>
                            <div className='item'>
                                <img src={mongodb_logo} alt='mongodb_logo'/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className='item'>
                                <img src={firebase_logo} alt='firebase_logo'/>
                                <h5>Firebase</h5>
                            </div>
                            <div className='item'>
                                <img src={sql_logo} alt='sql_logo'/>
                                <h5>MicrosoftSQL</h5>
                            </div>
                            <div className='item'>
                                <img src={jira_logo} alt='jira_logo_logo'/>
                                <h5>Jira</h5>
                            </div>
                            <div className='item'>
                                <img src={git_logo} alt='git_logo'/>
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
