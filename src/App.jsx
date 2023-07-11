import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Animedetails from './components/Animedetails';
import Searchbar from './components/Searchbar';

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/animedetails:mal_id">
             <Animedetails/>
        </Route>
        <Route path="/searchbar:searchKey">
             <Searchbar/>
        </Route>
        <Route exact path="/Animes">
             <Home/>
        </Route>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
