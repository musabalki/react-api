import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    /*fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(response=>setCountries(response))*/
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Link to="/">Anasayfa</Link>
        <h1>REACT</h1>
        <h2>Fetch - Axios</h2>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              countries.map((country) => (
                <div key={country.name}>
                  <hr />
                  <Link to={`/country/${country.alpha3Code}`}>
                    <h3>{country.name}</h3>
                  </Link>
                </div>
              ))
            }
          />

          <Route
            path="/country/:code"
            render={(renderProps) => {
              const country = countries.find(
                (country) =>
                  country.alpha3Code === renderProps.match.params.code
              );
              return <Country {...renderProps} country={country} />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

const Country = (props) => {
  let { name, capital } = props.country;
  return (
    <div>
      <h3>{name}</h3>
      <h5>{capital}</h5>
    </div>
  );
};
