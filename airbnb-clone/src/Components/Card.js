import star from '../images/star.png'
const Card = (props) => {

    return (
        <div className="card">

            <img src={props.img} alt="profile" className='card-photo' />
            <div className="raiting">
                <img src={star} alt="star" className='star' />
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount}) • </span>
                <span className='gray'> {props.country}</span>
            </div>
            <p className="experience">{props.title}</p>
            <p className="price"><span className='bold'>From {props.price}$ </span>/ person</p>
        </div>
    )
}
export default Card