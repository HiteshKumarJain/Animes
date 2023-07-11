import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Animedetails = () => {
  let { mal_id } = useParams();
  let [anime, setAnime] = useState(null);
  let [pending, setPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("fetch starts");

      fetch("https://api.jikan.moe/v4/anime/" + mal_id)
        .then((x) => {
          if (x.ok === true) {
            return x.json();
          } else {
            throw Error("Data not found");
          }
        })
        .then((y) => {
          setAnime(y.data);
          setPending(false);
        })
        .catch((e) => {
          setError(e.message);
          setPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {pending && <div className="loader"></div>}
      {anime && <div className="list">
        <img src={anime.images.jpg.image_url} alt="/" />
        <h1> {anime.title} </h1>
        <h3> Duration: {anime.duration} </h3>
        <h4> Rating: {anime.score} </h4>
       <div >
       <h2 id="desc">Description:</h2>
        <p>  {anime.synopsis} </p>
       </div>
      </div> }
    </div>
  );
};

export default Animedetails;
