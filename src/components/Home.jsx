import { useState } from "react";
import { useEffect } from "react";
import Animelist from "./Animelist";

const Home = () => {
  let [animes, setAnimes] = useState(null);
  let [pending, setPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("fetch starts");

      fetch("https://api.jikan.moe/v4/anime")
        .then((x) => {
          if (x.ok === true) {
            return x.json();
          } else {
            throw Error("Data not found");
          }
        })
        .then((y) => {
          setAnimes(y.data);
          setPending(false);
        })
        .catch((e) => {
          setError(e.message);
          setPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
        {error && <h1>{error}</h1>}
        {pending && <div className="loader"></div>}
        {animes && <Animelist animes={animes} title="All Animes" />}
    </div>
  );
};

export default Home;
