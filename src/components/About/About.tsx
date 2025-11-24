import { Container } from "./styles";
import lahatra from "../../assets/lahatra.png";
import java from "../../assets/java.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nextIcon from "../../assets/nextjs.svg";
import nestIcon from "../../assets/nestjs.svg";
import phpIcon from "../../assets/php.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import mysqlIcon from "../../assets/mysql.svg";
import pgIcon from "../../assets/postgresql.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Lahatra, Highly motivated Full-Stack Developer with
            one year of professional experience in designing and developing
            comprehensive web applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Proficient in key technologies including HTML, CSS, JavaScript,
            TypeScript, Node.js, and Laravel. Skilled in managing both
            Relational (SQL) and Non-Relational (NoSQL) databases.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I am open for discuss for anoother domains especially a remote job.
            I bring a versatile, curious mindset, with additional exposure to
            the Construction (BTP) and Architecture fields.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor option Software Engineering</h4>
            <p>IT University Andoharanofotsy | July 2024</p>
            <p>Andoaharanofotsy, Antananarivo Madagascar</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="experience">
            <h3>Experience:</h3>
            <br />
            <h4>Assistant User | Quality Assurance</h4>
            <p>BICI Madagascar | September 2025 - Present</p>
            <p>Andoaharanofotsy, Antananarivo Madagascar</p>
            <br />
            <h4>Architectural Drafter</h4>
            <p>FUTURMAP | March 2025 - June 2025</p>
            <p>Ankorahotra, Antananarivo Madagascar</p>
            <br />
            <h4>Independant developer</h4>
            <p>February 2025 - August 2025</p>
            <p>Freelance</p>
            <br />
            <h4>Developer Junior</h4>
            <p>ITRAS Group | September 2023 - June 2024</p>
            <p>Nanisana, Antananarivo Madagascar</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={nextIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={nestIcon} alt="next" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={phpIcon} alt="php" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={mongodbIcon} alt="mongo" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={mysqlIcon} alt="mysql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={pgIcon} alt="pgsql" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={lahatra} alt="Lahatra" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
