import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
// add fetchMovie()
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIES_GENRES', fetchMovieGenres);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
}

// function to GET all movie genres from db
// use try and catch
function* fetchMovieGenres(action) {
    try {
        const response = yield axios.get(`/api/genres/${action.payload}`)
        yield put({
            type: 'SET_GENRES',
            payload: response.data
        })
    }
    catch (error) {
        console.log('Error in fetchMovieGenre', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({
            type: 'SET_MOVIES',
            payload: movies.data
        });

    } catch {
        console.log('get all error');
    }
}

// function to get one movie details from db
// route is `api/movie/${id}`
function* fetchMovie(action) {
    try {
        let id = action.payload;
        const oneMovie = yield axios.get(`api/movie/${id}`)
        yield put({
            type: 'SET_DETAILS',
            payload: oneMovie.data
        })
    }
    catch (error) {
        console.log('GET single movie error', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// REDUX STORE --------------------------------------------------
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieItem = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ACTIVE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieItem
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
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
