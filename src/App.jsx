import { useEffect, useState } from 'react'
import Axios from "axios";
import react from "react";
import logo from "./assets/logo.png";
import Popup from './components/Popup.jsx';
import './app.css'
import LoginSignup from './components/loginsignup';

function Elixirs() {
const [search, setSearch] = useState("");
const [data, setData] = useState([]);
const [buttonPopup, setbuttonPopup] = useState(false);

   useEffect(() => {
    Axios.get("https://wizard-world-api.herokuapp.com/Elixirs").then((res) => {
      setData(res.data);
 });
}, []);

 return (
  <>
  <navbar className="navbar">
  <img  className="logo" src={logo}></img> 
  <button className="btn"> Images</button>
  <button className="btn">Videos</button>
  <button className="btn">Maps</button>
  <button className="btn">News</button>
  <button className="btn">Product</button>
<div>
  <button onClick={() => setbuttonPopup(true)} className="signin">signin</button>
  <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
    <LoginSignup/>
  </Popup>
  </div>
</navbar>
<div className="bkg">
<div className="search">
<input className="searchbar" type="text" placeholder="enter your Elixir"S
value={search}
onChange={(e) => setSearch(e.target.value)}/>
<button className="SchB" type="submit">Search</button>
</div>
  

  {data.filter((item) => {
    return search.toLowerCase() === "" 
    ? item 
    : item.name.toLowerCase().includes(search);
  })
  .map((item, index) => (
    <ul key={index}>
      <li> elixer name: {item.name}</li>
      <li> elixer difficulty:{item.difficulty}</li>
      <li> elixer ingredient:{item.ingredient}</li>
      <li> elixer manufacturer:{item.manufacturer}</li>
      <li> elixer effect:{item.effect}</li>
      <li> elixer sideEffect:{item.sideEffect}</li>
      <li> elixer time:{item.time}</li>
    </ul>
  ))};
 </div>
 </>
 )
 }

export default Elixirs