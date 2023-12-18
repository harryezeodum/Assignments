import React, {useState, useEffect} from "react";
import axios from "axios";


function App() {

const [colorApi, setApiColor] = useState([{}]);
const [hex, setHex] = useState("b88807");
  
function buttonClicked() {
    const allColors = colorApi;
    const colorIndex = Math.floor(Math.random() * allColors.length);
    setHex(prev => {
      return prev, allColors[colorIndex].hex;
    }) 
  }

useEffect(() => {
  axios.get("https://www.colr.org/json/tag/cheese")
      .then(response => setApiColor(response.data.colors))
      .catch(error => console.log(error))
}, [])

const styles = {
  backgroundColor: `#${hex}`
}


  return (
    <div className="App" style={styles}>
      <button className="button" onClick={buttonClicked} >Random Background Color</button>
    </div>
  );
}

export default App;
