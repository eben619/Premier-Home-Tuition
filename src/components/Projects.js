import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>APPLY AS A TUTOR</h2>
                <p className="text-left">
                  Are you passionate about teaching and making a real difference in students' lives? Do you thrive in an
                  environment that values excellence, flexibility, and professional growth? If so, we invite you to join our team
                  at Premier Home Tuition.
                  We are seeking dedicated and knowledgeable tutors to support students in various academic subjects and exam
                  preparations, including Cambridge IGCSE, A-Levels, IB, BECE, WASSCE, SAT, IELTS, GRE, and more.
                  Whether you are an experienced educator or an aspiring tutor looking to build your teaching career, we provide a
                  supportive platform with training and rewarding opportunities. Prior experience with Cambridge, IB, or GES curricula
                  is an advantage.
                  Be part of an innovative education network. Apply today and inspire the next generation!
                </p>
                
                <Tab.Container defaultActiveKey="first">
                  <Nav className=" justify-content-center align-items-center">
              
                <button 
                  style={{ 
                    background: "black", 
                    color: "purple", 
                    border: "2px solid purple", 
                    padding: "8px 16px", 
                    borderRadius: "5px", 
                    fontWeight: "bold",
                    cursor: "pointer" 
                  }}
                  onMouseOver={(e) => { e.target.style.background = "purple"; e.target.style.color = "white"; }}
                  onMouseOut={(e) => { e.target.style.background = "rgba(255, 255, 255, 0.8)"; e.target.style.color = "purple"; }}
                >
                  Apply To Be A Tutor
                </button>
              
                  </Nav>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background decoration" />
    </section>
  )
}