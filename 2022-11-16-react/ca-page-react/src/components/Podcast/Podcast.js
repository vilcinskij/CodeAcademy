import logo from '../../img/podcast-artist.png'

export default function Podcast() {
    return (
        <div className="podcast">
            <div className="artist-img">
                <img src={logo} alt="" />
            </div>
            <div className="duration">
                <span>Trukmė: 7:55</span>
            </div>
            <div className="play-button">
                <button></button>
            </div>
            <div className="podcast-info">
                <h3>Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                <span>2021-09-02</span>
            </div>
        </div>
    )
}