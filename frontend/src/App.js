import React from 'react';
import ImportData from './components/ImportData';
import Summary from './components/Summary';
import FilterData from './components/FilterData';
import DataVisualization from './components/DataVisualization';

const App = () => {
  return (
    <div>
      <ImportData />
      <Summary data={{ zeros: 10, ones: 15, continuousZeros: 5, continuousOnes: 7 }} />
      <FilterData />
      <DataVisualization />
    </div>
  );
};

export default App;
