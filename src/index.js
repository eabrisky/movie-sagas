import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* rootSaga() {

    yield takeEvery('FETCH_MOVIES', fetchAllMovies);

} // end rootSaga

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

} // end fetchAllMovies fn*

// Used to store movies returned from the server
const movies = (state = [], action) => {

    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    } // end switch

} // end movies reducer

// Used to store the movie genres
const genres = (state = [], action) => {

    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    } // end switch

} // end genres reducer

// Create one store that all components can use
const storeInstance = createStore(

    combineReducers({
        movies,
        genres
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger)

);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
