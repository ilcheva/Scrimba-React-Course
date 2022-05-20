import star from '../images/star.png'
const Card = (props) => {
    let badgeText = '';
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === "Online") {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} alt="profile" className='card-photo' />
            <div className="raiting">
                <img src={star} alt="star" className='star' />
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount}) • </span>
                <span className='gray'> {props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className='bold'>From {props.price}$ </span>/ person</p>
        </div>
    )
}
export default Card