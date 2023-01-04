import '../css/card.css';
const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            <img src={props.img} alt="profile" className="card_image" />
            {badgeText && <h3 className="card_status">{badgeText}</h3>}
            <div className="card_body">
                <div className="card_review">
                    <span className="card_icon material-symbols-outlined">star</span>
                    <h3 className="card_rating">{props.stats.rating}</h3>
                    <h3 className="card_review" >({props.stats.reviewCount})</h3>
                    <h3 className="card_review" >.{props.location}</h3>         
                </div>
                <h3 className="card_title">{props.title}</h3>
                <div className="card_sale">
                    <h3 className="card_price">From ${props.price}</h3>
                    <h3 className="card_qty">/{props.qty}</h3>
                </div>
            </div>
        </div>
    )
};

export default Card;