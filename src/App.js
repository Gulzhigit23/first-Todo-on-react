import { useState } from "react";
import "./App.css";

function App() {
  const [getValue, setGetValue] = useState("");
  const [clic, setClick] = useState([]);

  function handle(e) {
    setGetValue(e.target.value);
  }
  function addValue(e) {
    e.preventDefault();
    setClick((prev) => {
      return [...prev, { value: getValue, id: Math.random().toString() }];
    });
  }
  const dalete = (id) => {
    const newperem = clic.filter((item) => item.id !== id);
    setClick(newperem);
  };

  return <div className="App">
    <div className="cont-1">
      <input className="input" placeholder="type something..." onChange={(e) => handle(e)} />
      <button className="btn-1" onClick={addValue}>click</button>
    </div>
    {clic.map((item)=>{
      return(
        <div className="cont-2">
          <span className="dateBlock" key={item.id}>
            {new Date().toDateString()}
          </span>
         <h4 className="text">{item.value}</h4>
         <button className="btn-2" onClick={() => dalete(item.id)}>dalete</button>
        </div>
      )
    })}
  </div>;
}

export default App;
