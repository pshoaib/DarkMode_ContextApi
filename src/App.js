import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

import {reducers} from "./Reducer/reducer"
import { Navbar } from './Components/Navbar';
// const reducer =(state , action)=>
// {
//   switch(action.type)
//   {
//     case "INCREMENT":
//     {
//      return  { ...state ,  count:state.count+1}
//     }
//     case "DECREMENT":
//     {
//       return  { ...state ,  count:state.count-1}
//     }
//     default :
//     {
//       return state
//     }
//   }
// }

function App() {
  const [state , dispatch]= useReducer(reducers, {count:0} )
  return (
    <div className="App">
      <Navbar />
     
       <h1>Auth Context Provider </h1>
       <h2> count : {state.count}</h2>
       <button onClick={()=> dispatch({type:'INCREMENT'})}>Increase</button>

       <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrease</button>
       <h1>shoaib patel</h1>
      
    </div>
  );
}

export default App;
