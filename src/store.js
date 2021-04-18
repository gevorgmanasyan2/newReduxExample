import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import {sayHiOnDispatch, includeMeaningOfLife} from './exampleAddones/enhancers';
import{print1,print2,print3,delayedActionMiddleware,fetchTodosMiddleware,asyncFunctionMiddleware} from './exampleAddones/middleware';
import { client } from './api/client';

// const composedEnhancer=compose(sayHiOnDispatch, includeMeaningOfLife)

// const composedEnhancer=applyMiddleware(print1,print2,print3)

// const middlewareEnhancer=applyMiddleware(asyncFunctionMiddleware)

// const composedEnhancer=composeWithDevTools(
//     applyMiddleware(delayedActionMiddleware,fetchTodosMiddleware)
//     // applyMiddleware(print1,print2,print3)
//     //other store enhancers if any
// )
// const store= createStore(rootReducer,composedEnhancer);
const composedEnhacer=composeWithDevTools(applyMiddleware(thunkMiddleware));
const store= createStore(rootReducer,composedEnhacer);


// const fetchSomeData=(dispatch,getState)=>{
//     //Make an async HTTP request
//     client.get('todos').then(todos=>{
//         //Dispatch an action with the todos we received
//         dispatch({type:'todos/todosLoaded',payload:todos})
//         //Check the update store state after dispatching
//         const allTodos=getState().todos;
//         console.log("Number of todos after loading", allTodos.length);
//     })
// }

//Pass the_function_ we wrote to `dispatch`
// store.dispatch(fetchSomeData)





export default store;




