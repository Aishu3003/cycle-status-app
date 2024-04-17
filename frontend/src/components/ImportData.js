import React, { useState } from 'react';
import axios from 'axios';

const ImportData = () => {
  const [timestamp, setTimestamp] = useState('');
  const [sample, setSample] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/data/import', { timestamp, sample });
      alert('Data imported successfully');
    } catch (err) {
      console.error(err);
      alert('Error importing data');
    }
  };

  return (
    <div>
      <h2>Import Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="datetime-local" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
        <input type="number" value={sample} onChange={(e) => setSample(e.target.value)} />
        <button type="submit">Import</button>
      </form>
    </div>
  );
};

export default ImportData;
