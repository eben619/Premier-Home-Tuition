import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Premier Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg"; // You'll need to add a Facebook icon SVG

export const Footer = () => {
  return (
    <footer className="footer pt-1">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/premier-home-tuition/about/"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:premierhometuitiongh@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/premier_home_tuition/?hl=en"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.facebook.com/premierhometuitiongh"><img src={navIcon4} alt="Icon" /></a> {/* Facebook icon */}
            </div>
            <p>All Rights Reserved, 2025.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
