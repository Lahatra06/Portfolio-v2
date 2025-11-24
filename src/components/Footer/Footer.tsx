import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import gitlabIcon from "../../assets/gitlab.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="lien vercel" className="logo">
        <span>lienvercel</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
            <a
              href="https://www.linkedin.com/in/lahatra-rabenarivo-b77126271"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/lahatra06/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://gitlab.com/Lahatra06"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitlabIcon} alt="GitLab" />
            </a>
          </div>
    </Container>
  )
}
