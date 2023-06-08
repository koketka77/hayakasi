import { useState } from "react";


function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={()=>{
        if(num < 15) setNum(num + 5)
      }}>+5</button>
      <button onClick={()=>{
        if(num > 0) setNum(num - 5)
      }} >-5</button>
    </div>
  );
}

export default App;
