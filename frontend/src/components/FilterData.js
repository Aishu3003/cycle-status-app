import React, { useState } from 'react';
import axios from 'axios';

const FilterData = () => {
  const [startTime, setStartTime] = useState('');
  const [interval, setInterval] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/data/filter?start=${startTime}&interval=${interval}`);
      setFilteredData(response.data);
    } catch (err) {
      console.error(err);
      alert('Error filtering data');
    }
  };

  return (
    <div>
      <h2>Filter Data</h2>
      <form onSubmit={handleFilter}>
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <select value={interval} onChange={(e) => setInterval(e.target.value)}>
          <option value="hour">Hourly</option>
          <option value="day">Daily</option>
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.timestamp}: {item.sample}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterData;
