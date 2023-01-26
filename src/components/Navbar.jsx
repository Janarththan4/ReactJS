import world from '../assets/world.png'

export default function Navbar() {
    return (
        <div>
            <nav className="nav">
                <img src={world} className="nav--logo"/>
                <div className='nav--title'>my travel journal.</div>
            </nav>
        </div>
    )
}