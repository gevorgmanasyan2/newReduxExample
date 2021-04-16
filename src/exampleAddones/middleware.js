import {client} from '../api/client';

export const print1 = (storeAPI) => (next) => (action) => {
    console.log('1')
    return next(action)
  }
  
  export const print2 = (storeAPI) => (next) => (action) => {
    console.log('2')
    return next(action)
  }
  
  export const print3 = (storeAPI) => (next) => (action) => {
    console.log('3')
    return next(action)
  }

  export const delayedActionMiddleware=storeAPI=>next=>action=>{
    if(action.type==='todos/todoAdded'){
      setTimeout(() => {
        next(action)
      }, 1000)
      
      return
    }
    return next(action)
  }

  export const fetchTodosMiddleware=storeAPI=>next=>action=>{
    if(action.type==='todos/fetchTodos'){
      //Make an API call to fetch todos from the server
      client.get('todos').then(todos=>{
        //Dispatch an action with the todos we recived
        dispatchEvent({type:'todos/todosLoaded',payload:todos})
      })
    }
   
    return next(action)
  }

  export const asyncFunctionMiddleware = storeAPI => next => action => {
    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
      // then call the function and pass `dispatch` and `getState` as arguments
      return action(storeAPI.dispatch, storeAPI.getState)
    }
  
    // Otherwise, it's a normal action - send it onwards
    return next(action)
  }