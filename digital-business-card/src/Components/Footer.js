
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div className="footer">            
            <FontAwesomeIcon className='twitter' icon={faTwitterSquare} size='2x' color='#918E9B'/>
            <FontAwesomeIcon  className='instagram' icon={faInstagramSquare}size='2x'  />
            <FontAwesomeIcon className='facebook'  icon={faFacebookSquare} size='2x' />
            <FontAwesomeIcon className='github' icon={faGithubSquare} size='2x' />
        </div>
    )
}
export default Footer;