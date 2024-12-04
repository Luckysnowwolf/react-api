import { useEffect, useState } from 'react'
import '/pages.css'

function Elixirs() {
const [search, setSearch] = useState("");
CONST [data, setData] = useState([]);

  const generateElixir = () => {
    ("https://wizard-world-api.herokuapp.com/Elixirs").then((res) => {
      setData(res.data);
 }
);
}
 return (

 <div>
  <input type="text" placeholder="enter your Elixir"
  value={search}
  onCange={(e) => setSearch(e.target.value)}
  /><button>Search</button>

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


  ))}
 </div>
 )
 }

export default Elixirs