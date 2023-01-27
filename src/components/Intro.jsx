import dp from "../assets/person.jpg"

export default function Intro() {
    return (
      <div className="intro">
        <img src={dp} className="intro-profile" alt="person"/>
        <div className="intro-info">
            <div className="intro-name">Janarththan Suthaharan</div>
            <div className="intro-title">Frontend Developer</div>
            <a href="https://www.youtube.com/@qmlcypher" target="_blank" className="intro-site">cypher.youtube</a>
        </div>
        <button className="intro-email-btn">
          <a href="mailto:ssjanarththan.4@gmail.com" target="_blank" className="intro-email">
            <i class="fa-solid fa-envelope"></i>
            Email
          </a>
        </button>
      </div>
    )
}