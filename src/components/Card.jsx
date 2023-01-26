import star from '../assets/star.png'

export default function Card(props) {
    let badgeInfo
    if (props.openSpots === 0) {
        badgeInfo = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeInfo = "ONLINE"
    }

    return (
        <section className='card'>

            <img src={`${props.coverImg}`} className="card--photo" />

            {badgeInfo && <div className='card--status'>
                {badgeInfo}
            </div>}
            
            <div className="card--inline">
                <img src={star} className="card--star" />

                <span className='card--rate'>
                    {props.stats.rating}
                </span>

                <span className='card--review-count grey'>
                    ({props.stats.reviewCount}) • 
                </span>

                <span className='card--location grey'>
                    {props.location}
                </span>
            </div>

            <div className="card--title">
                {props.title}
            </div>
            
            <div className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </div>

        </section>
    )
}