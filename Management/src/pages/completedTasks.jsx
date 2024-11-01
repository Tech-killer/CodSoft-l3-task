import React from 'react';
import Cards from '../components/Cards';

function CompletedTasks({ tasks }) {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Completed Tasks</h1>
      <Cards tasks={tasks} filterStatus="Completed" />
    </div>
  );
}

export default CompletedTasks;
