import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills" style={{ backgroundColor: "lightblue" }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{ backgroundColor: "blue", color: "white" }}>
                        <h2>OUR MISSION</h2>
                        <p>We help students excel by providing personalized,
                        engaging, and confidence-building tutoring.</p>
                        <h2>OUR VISION</h2>
                        <p> To create a future where every student in Ghana thrives
                            academically with the support of expert and caring
                            educators.
                            Our team of qualified and experienced tutors is carefully
                            selected to ensure expert guidance in all subjects and test
                            preparations. We match you with the best tutor based on
                            your needs, and if the fit isn't perfect, we offer free
                            replacements until you find the right match.
                        </p>
                        
                        <div className="core-values">
                            <h2>OUR CORE VALUES</h2>
                            <p><strong>Excellence</strong> – Delivering top-quality tutoring for outstanding results.</p>
                            <p><strong>Integrity</strong> – Honesty and transparency in all interactions.</p>
                            <p><strong>Commitment</strong> – Personalized learning tailored to each student's needs.</p>
                            <p><strong>Innovation</strong> – Modern teaching techniques for effective learning.</p>
                            <p><strong>Accountability</strong> – Regular follow-ups to ensure progress and success.</p>
                        </div>
                            
                        <h3 className="pb-4"> We Offer These Types Of Tuition </h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider ">
                            <div className="item">
                                <h5>Online Tuition</h5>
                            </div>
                            <div className="item">
                                <h5>In-Person Tuition</h5>
                            </div>
                            <div className="item">
                                <h5>Hybrid</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* Background image removed and replaced with light blue background */}
    </section>
  )
}