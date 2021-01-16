import axios from "axios";
import {useEffect,useState} from "react";

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
      axios.get('https://restcountries.eu/rest/v2/all')
      .then(response=>setCountries(response.data)) 
  },[])
  return (
    <div className="App">
        {countries.map(c=>{
          return (
            <div key={c.name} style={{textAlign:"center",background:"#f2f2f2",padding:"5px",margin:"15px",boxSizing:"borderBox"}}> 
              <h2>{c.name}</h2>
              <h4>{c.capital}</h4>
              <p>
                <img src={c.flag} style={{width:"100px"}} />
              </p>
            </div>
          )
        })}
    </div>
  );
}

export default App;
