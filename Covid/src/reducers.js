// reducers.js
import { combineReducers } from 'redux';
import {
  FETCH_COVID_STATS_REQUEST,
  FETCH_COVID_STATS_SUCCESS,
  FETCH_COVID_STATS_FAILURE,
  SET_SELECTED_DATE,
} from './actions';

const initialState = {
  stats: [],
  loading: false,
  error: null,
  selectedDate: new Date(),
};

const covidStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_STATS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COVID_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        stats: action.payload,
      };
    case FETCH_COVID_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  covidStats: covidStatsReducer,
});

export default rootReducer;
