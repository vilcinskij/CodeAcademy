import logo from '../../img/main-news-1.jpg'

export default function NewsItem({type}) {
    return (
        <a href="./">
            <div className={type}>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="new-card-info">
                    <span> NAUJIENOS</span>
                    <h3> Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?</h3>
                    <span> 2022-03-23</span>
                </div>
            </div>
        </a>
    )
}