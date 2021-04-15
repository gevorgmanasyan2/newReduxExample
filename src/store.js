import {createStore} from 'redux';
import rootReducer from './reducer';
import {sayHiOnDispatch, includeMeaningOfLife} from './exampleAddones/enhancers';

const store= createStore(rootReducer);

export default store;