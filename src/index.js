// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import store from './store';

// console.log("initial state ", store.getState());

// const unsubscribe=store.subscribe(()=>
// console.log("State after dispatch", store.getState())
// )
// store.dispatch({type:'todos/todoAdded',payload:'Learn about actions'});
// store.dispatch({type:'todos/todoAdded',payload:'Learn about redusers'});
// store.dispatch({type:'todos/todoAdded',payload:'Learn about stores'});

// store.dispatch({type:'todos/todoToggled',payload:0})
// store.dispatch({type:'todos/todoToggled',payload:1});

// store.dispatch({type:"filters/statusFilterChanged",payload:'Active'});

// store.dispatch({
//   type:'filters/colorFilterChanged',
//   payload:{color:'red',changeType:'added'}
// });

// unsubscribe()

// store.dispatch({type:'todos/todoAdded',payload:'Try creating a store'})

// console.log("Dispatching action");
// store.dispatch({type:'todos/todoAdded',payload:'Learn about actions'})
// console.log("Dispatch complete");


// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// // log: 'Hi!'

// console.log('State after dispatch: ', store.getState())
// // log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })







