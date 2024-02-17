// actions.js
import axios from 'axios';

export const FETCH_COVID_STATS_REQUEST = 'FETCH_COVID_STATS_REQUEST';
export const FETCH_COVID_STATS_SUCCESS = 'FETCH_COVID_STATS_SUCCESS';
export const FETCH_COVID_STATS_FAILURE = 'FETCH_COVID_STATS_FAILURE';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';

export const fetchCovidStatsRequest = () => ({
  type: FETCH_COVID_STATS_REQUEST,
});

export const fetchCovidStatsSuccess = stats => ({
  type: FETCH_COVID_STATS_SUCCESS,
  payload: stats,
});

export const fetchCovidStatsFailure = error => ({
  type: FETCH_COVID_STATS_FAILURE,
  payload: error,
});

export const setSelectedDate = date => ({
  type: SET_SELECTED_DATE,
  payload: date,
});

export const fetchCovidStats = () => {
  return async dispatch => {
    dispatch(fetchCovidStatsRequest());
    try {
      const response = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
      dispatch(fetchCovidStatsSuccess(response.data));
    } catch (error) {
      dispatch(fetchCovidStatsFailure(error.message));
    }
  };
};
