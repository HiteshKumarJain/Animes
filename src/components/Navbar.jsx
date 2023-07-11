import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '..//cinemalogo.png'
function Navbar() {
    let [searchKey, setSearchKey] = useState("")
    return (<nav>
        <div className="navbarlogo">
            <Link to="/Anime" id="logo"><img src={logo} alt="/" /></Link>
            <h1>AnimeVerse</h1>
        </div>
        <div className="searchbar">
            <input type="search" placeholder=" 🔍 Search here" style={{ padding: "2px" , fontSize:"15px" }} value={searchKey} onChange={(e) => { setSearchKey(e.target.value) }} />
            <Link to={`/searchbar${searchKey}`}><button>search</button></Link>
        </div>

    </nav>);
}

export default Navbar;