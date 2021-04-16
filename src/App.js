import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './features/header/Header';
import TodoList from './features/todos/TodoList';
import Footer from './features/footer/Footer';
import {createStore} from 'redux';


function App(){

  return(
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>          
        </section>
      </nav>
      <section className="medium-container">
        
        <h2>Todos</h2>
        <div className="todoapp">
          <Header/>
          <TodoList/>
          <Footer/>
          
        </div>
      </section>
    </div>
  )
}

export default App;



// function App() {
  
//   const initialState={
//     value:0
//   }
//   const counterReducer=(state=initialState,action)=>{
//     switch (action.type) {
//       case "counter/incremented":
//         return{...state, value:state.value+1}
//         break;
//         case "counter/decrimented":
//           return{...state, value:state.value-1}
//           break;
              
//       default:
//         return state
//         break;
//     }
//   }
//   const store=createStore(counterReducer); 
  
//   const Increment=()=>{
//     store.dispatch({type:"counter/incremented"})
//   }
//   const Decrement=()=>{
//     store.dispatch({type:"counter/decrimented"})
//   }
//   const IncrementIfOdd=()=>{
//     if(store.getState().value%2!==0){
//       store.dispatch({type:"counter/incremented"})
//     }    
//   }
//   const IncrementAsync=()=>{
//     setTimeout(()=>{
//       store.dispatch({type:"counter/incremented"})
//     },1000)
    
//   }
//   function render(){
//     const state=store.getState();    
//     document.getElementById("count").innerHTML=state.value.toString();    
//   }
//   // render()

//   store.subscribe(render);
  

//   return (
//     <div className="App">
//      <div>
//       <p>
//         Clicked: <span id="count">{store.getState().value}</span> times
//         <button id="increment" onClick={Increment}>+</button>
//         <button id="decrement" onClick={Decrement}>-</button>
//         <button id="incrementIfOdd" onClick={IncrementIfOdd}>Increment if odd</button>
//         <button id="incrementAsync" onClick={IncrementAsync}>Increment async</button>
//       </p>
//     </div>
//     </div>
//   );
// }