
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div className="footer">
            <a href="https://twitter.com/settings/profile" target="_blank" rel="noreferrer" hovered>
                <FontAwesomeIcon className='twitter' icon={faTwitterSquare} size='2x' /></a>
            <a href="https://www.instagram.com/ilcheva/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className='instagram' icon={faInstagramSquare} size='2x' /></a>
            <a href="https://www.facebook.com/simona.ilcheva/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className='facebook' icon={faFacebookSquare} size='2x' /></a>
            <a href="https://github.com/ilcheva" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className='github' icon={faGithubSquare} size='2x' /></a>
        </div>
    )
}
export default Footer;