import axios from "axios";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, [])
  return (
    <Router>
      <div className="App">
        Anasayfa
        <Switch>
        <Route path="/" render={ (props) => (<Countries {...props} countries={countries} ></Countries>) }>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Countries(props){
  return (
    <div>
      {
        props.countries.map(c => {
          return (
            <div key={c.name} style={{ textAlign: "center", background: "#f2f2f2", padding: "5px", margin: "15px", boxSizing: "borderBox" }}>
              <Link to="/detay">
                <h3>{c.name}</h3>
              </Link>
              <h4>{c.capital}</h4>
              <p>
                <img src={c.flag} style={{ width: "100px" }} />
              </p>
            </div>
          )
        })
      }
    </div>
  )
}