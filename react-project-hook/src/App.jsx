import { useState } from 'react';
import './App.css'
import Navbar from './Navbar.jsx';
import Home from "./Home.jsx";
import Hero from './Hero.jsx';

// function App() {
//   let count = 0;
//   let handleClick = () =>{
//     count = count+1;
//     console.log(count);
//   }
// return(
//   <>
//     <h3>Introduction to useState Hook</h3>
//     <p>Count : {count}</p>
//     <button onClick={handleClick}>Click me!</button>
//   </>
// );
// }
// export default App


// Using useState Hook 
function App() {
  const[count, setCount] = useState(0);
return(
  <>
  <Navbar/>
  <Home appCount={count} setCount = {setCount}/>
  <div className="bg-light p-2">
    <p>Count : {count}</p>
    <button type="button" className="btn btn-primary mx-1" onClick={()=>setCount(count+1)}>Increase</button>
    {count>0 && <button className="btn btn-secondary mx-1" onClick={()=>setCount(count-1)}>Decrease</button>}
    <button type="button" className="btn btn-danger mx-1" onClick={()=>setCount(0)}>Reset</button>
    <br />
    <br />
    <Hero/>
    </div>
  </>
);
}
export default App
