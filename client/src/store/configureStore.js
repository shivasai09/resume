import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducer from '../Reducers'

export default ()=>{
    let store;
    store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store
}