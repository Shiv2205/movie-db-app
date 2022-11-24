import { useEffect } from "react";
import axios from "axios";

function App() {
const apiKey = "48c4e1a6";

useEffect(() => {
  axios(`http://www.omdbapi.com/?apikey=${apiKey}`).then((response) => {
    console.log(response);
  })
}, []);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
