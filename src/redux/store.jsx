import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducer.jsx";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../saga/userSaga.jsx";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;