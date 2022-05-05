import AboutSection from "./AboutSection"
import InterestSection from "./InterestSection"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const InfoSection = () => {
    return (
        <div className="info-section">
            <img src="1636971884825.jpg" alt="profile" />
            <h3 className="card-name">Simona Ilcheva</h3>
            <p className="job-title">Junior Frontend Developer</p>
            <p className="personal-website">future website</p>
            <div className="btn">
                <a href="mailto:s.ilcheva@gmail.com"><button className="email"><FontAwesomeIcon icon={faEnvelope} /> Email</button></a>
                <a href="https://www.linkedin.com/in/simona-ilcheva-53984423/" target="_blank" rel="noreferrer"><button className="linkedin-btn"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button></a>
            </div>
            <AboutSection />
            <InterestSection />
        </div>
    )
}
export default InfoSection