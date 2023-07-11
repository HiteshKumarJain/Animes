import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Animelist from "./Animelist";

const Searchbar = () => {

    let {searchKey}=useParams();
    let [animes,setAnimes]=useState(null)
    let[pending,setPending]=useState(true)
    let [error,setError]=useState(null)

    useEffect(()=>{
        setTimeout(() => {
            console.log("fetch starts");

            fetch("https://api.jikan.moe/v4/anime")
        .then((x)=> {
            if (x.ok=== true )
            { 
                return x.json()
            }
            else
            {
                throw Error("Data not found")
            }
        })
        .then((y)=>{setAnimes (y.data);setPending(false)})
        .catch((e)=>{setError(e.message);setPending(false)})}, 
        1000);
    },[searchKey])
    return ( <div>
            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>}
            {animes && <Animelist animes={animes.filter((cartoon)=> cartoon.title.toUpperCase().includes(searchKey.toUpperCase()))} title="Search Animes" />}
      </div> );
}
 
export default Searchbar;