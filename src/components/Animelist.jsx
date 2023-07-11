import { Link } from "react-router-dom";

const Animelist = ({animes,title}) => {
    return (  <div className="Allanime">
                <h1 id="title">{title}</h1>
                <div className="animelist">
                    {animes.map((cartoon)=>{return (
                        <div className="anime" key={cartoon.title}>
                            <Link to={"/animedetails"+cartoon.mal_id} id="linktag">
                            <img src={cartoon.images.jpg.image_url} alt="pic" />
                            <h1>{cartoon.titles[0].title} </h1>
                            <h3> {cartoon.mal_id} </h3>
                            </Link>
                        </div>
                    ) }) }
                </div>
    </div> );
}
 
export default Animelist;
