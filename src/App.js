import "./App.css";

import Cards from "./Cards";
import Carousel from "./Carousel";
function App() {
 

  return (

    <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>
      <div style={{height:'auto',width:'100%'}}>
        <Carousel/>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
