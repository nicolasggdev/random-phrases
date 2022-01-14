import {useState} from "react";

// Styles
import "./reset.styles.css";
import "./App.css"

// Components
import QuoteBox from "./Components/QuoteBox/QuoteBox";

// Database
import colors from "./colors.json";

function App() {

  // Hook
  const [color, setColor] = useState("#FF7272");

  const randomColor = () => {
    const randomColor = Math.floor(Math.random()*10);
    setColor(colors[randomColor].hex)
  };

  const styles = {
    background: color
  };

  return (
    <div className="containerppal" style={styles}>
      <QuoteBox randomColor={randomColor} color={color}/>
    </div>
  );
}

export default App;