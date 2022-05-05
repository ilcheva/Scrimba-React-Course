import AboutSection from "./AboutSection"
import InterestSection from "./InterestSection"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const InfoSection = () => {
    return (
        <div className="info-section">
            <img src="1636971884825.jpg" alt="profile"  />
            <h3 className="card-name">Simona Ilcheva</h3>
            <p className="job-title">Junior Frontend Developer</p>
            <p className="personal-website">somewebsite</p>
            <div className="btn">
                <button className="email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="linkedin-btn"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
            </div>
            <AboutSection />
            <InterestSection />
        </div>
    )
}
export default InfoSection