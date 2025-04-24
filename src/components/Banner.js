import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import bannerBackground from "../assets/img/consulting1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "SAT Tuition", "BECE REMEDIALS", "WASSCE REMEDIALS", "GED Tuition", "IGCSE Tuition", "A-LEVEL Tuition", "GRE Tuition", "IELTS Tuition", "ETC..." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner"
      id="home"
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to Premier Home Tuition</span>
                  <h1 style={{ color: '#0000cc' }}> 
                    {`What We Offer`}
                    <br />
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "SAT", "BECE REMEDIALS", "WASSCE REMEDIALS", "GED", "IGCSE", "A-LEVEL", "GRE", "IELTS" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  
                  {/* Updated text with a semi-transparent background */}
                  <div 
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
                      padding: "20px",
                      borderRadius: "10px",
                      textAlign: "center",
                      maxWidth: "800px",
                      margin: "20px auto",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
                    }}
                  >
                    <p style={{ color: "black", fontSize: "18px", lineHeight: "1.6", fontWeight: "500" }}>
                      Premier Home Tuition is a leading provider of home and online tutoring
                      services in Ghana, helping students achieve academic success through
                      personalized learning. Our experienced and qualified tutors specialize in
                      Cambridge IGCSE, A-Level, O-Level, IB, BECE, WASSCE, SAT, IELTS, GRE, and
                      more.
                    </p>
                  </div>

                  <button 
                    onClick={() => window.open("https://form.typeform.com/to/kmd0Scuf", "_blank")}
                    style={{
                      background: "black",
                      color: "white",
                      border: "2px solid white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "white"; 
                      e.target.style.color = "black";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "black"; 
                      e.target.style.color = "white";
                    }}
                  >
                    Request A Tutor <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
