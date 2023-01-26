import airbnb from "../assets/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={airbnb} className="nav--logo" alt="airbnb logo"/>
        </nav>
    )
}