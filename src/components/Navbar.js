import logo from "../logo.svg";

export default function Nav() {
    return (
        <nav>
            <div className="wrap">
                <img src={logo} className="nav--icon" alt="logo"/>
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}
