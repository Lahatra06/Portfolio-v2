import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import link from "../../assets/download.svg";
import Resume from "../../assets/RABENARIVO-LAHATRA-CV25.pdf";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now.</p>
      </header>
      <div className="contacts">
        <div>
          <a href={Resume} download>
            <img src={link} alt="Resume" />
          </a>
          <a href={Resume} download>
            Resume
          </a>
        </div>
      </div>
      <div className="contacts">
        <div>
          <a href="mailto:rabenarivolahatra@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:rabenarivolahatra@gmail.com">
            rabenarivolahatra@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+26134463709">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+26134463709">(+261) 34 46 371 09</a>
        </div>
      </div>
    </Container>
  );
}
