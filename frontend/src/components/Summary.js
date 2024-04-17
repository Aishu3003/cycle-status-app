import React from 'react';

const Summary = ({ data }) => {
  return (
    <div>
      <h2>Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Number of 0s</th>
            <th>Number of 1s</th>
            <th>Continuous Os</th>
            <th>Continuous 1s</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.zeros}</td>
            <td>{data.ones}</td>
            <td>{data.continuousZeros}</td>
            <td>{data.continuousOnes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
