import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducer';
import {sayHiOnDispatch, includeMeaningOfLife} from './exampleAddones/enhancers';
import{print1,print2,print3} from './exampleAddones/middleware';

// const composedEnhancer=compose(sayHiOnDispatch, includeMeaningOfLife)

// const composedEnhancer=applyMiddleware(print1,print2,print3)

const composedEnhancer=composeWithDevTools(
    applyMiddleware(print1,print2,print3)
    //other store enhancers if any
)
const store= createStore(rootReducer,composedEnhancer);

export default store;