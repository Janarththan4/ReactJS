import location from '../assets/location.png'

export default function TravelLocation(props) {
    return (
        <>
        <section className="place">
            <div className="place-image">
                <img src={`${props.imageUrl}`} className="place--image"/>
            </div>
            <div className="place--info">
                <div className="place--gps">
                    <img src={location} />
                    <p className="place--location">{props.location}</p>
                    <a href={props.googleMapsUrl} className="place--link">View on Google Maps</a>
                </div>
                <h1 className="place--title">{props.title}</h1>
                <div className="place--duration">{props.startDate} - {props.endDate}</div>
                <p className="place--description">{props.description}</p>
            </div>
        </section>
        <hr/>
        </>
    )
}