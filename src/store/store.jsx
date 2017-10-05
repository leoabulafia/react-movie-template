import * as redux from 'redux';
import logger from 'redux-logger';
import {languageReducer} from 'reducers';

const middleware = redux.applyMiddleware(logger);

export const store = redux.createStore(languageReducer, middleware);
