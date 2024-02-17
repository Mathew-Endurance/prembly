// CovidStats.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { fetchCovidStats, setSelectedDate } from './actions';
import './CovidStats.css'; 
import Spinner from './Spinner';


function CovidStats() {
  const dispatch = useDispatch();
  const stats = useSelector(state => state.covidStats.stats);
  const loading = useSelector(state => state.covidStats.loading);
  const selectedDate = useSelector(state => state.covidStats.selectedDate);

  useEffect(() => {
    dispatch(fetchCovidStats());
  }, [dispatch]);

  useEffect(() => {
    // Set the default date to the date of the first entry in the statistics data
    if (stats.length > 0) {
      const firstDate = moment(stats[0].date, 'YYYYMMDD').toDate();
      dispatch(setSelectedDate(firstDate));
    }
  }, [dispatch, stats]);

  const handleDateChange = date => {
    dispatch(setSelectedDate(date));
  };

  const formattedDate = moment(selectedDate).format('YYYYMMDD');

  const filteredStats = stats.filter(stat => moment(stat.date, 'YYYYMMDD').format('YYYYMMDD') === formattedDate);

  // Map over the statistics and update values with a default of 0 if they are falsy
  const statsWithDefaults = filteredStats.map(stat => ({
    ...stat,
    positive: stat.positive || 0,
    negative: stat.negative || 0,
    totalTestResults: stat.totalTestResults || 0,
    death: stat.death || 0,
    hospitalizedCurrently: stat.hospitalizedCurrently || 0,
    hospitalizedCumulative: stat.hospitalizedCumulative || 0,
  }));

  return (
    <div>
      <h1 className="title">COVID-19 Statistics</h1>
      <DatePicker 
        selected={selectedDate} 
        onChange={handleDateChange} 
        className='date-picker' 
      />
      {loading ? (
       <Spinner/>
      ) : (
        <div className="card-container">
          {statsWithDefaults.length > 0 ? (
            statsWithDefaults.map((stat, index) => (
              <div key={index} className="card">
                <div className="box">
                  <h3>Positive Cases</h3>
                  <p>{stat.positive}</p>
                </div>
                <div className="box">
                  <h3>Negative Cases</h3>
                  <p>{stat.negative}</p>
                </div>
                <div className="box">
                  <h3>Total Tests</h3>
                  <p>{stat.totalTestResults}</p>
                </div>
                <div className="box">
                  <h3>Deaths</h3>
                  <p>{stat.death}</p>
                </div>
                <div className="box">
                  <h3>Hospitalized</h3>
                  <p>{stat.hospitalizedCurrently}</p>
                </div>
                <div className="box">
                  <h3>Hospitalized Cumulative</h3>
                  <p>{stat.hospitalizedCumulative}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No data available for the selected date.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CovidStats;
