import React from 'react';
import Cards from '../components/Cards';

function ImportantTasks({ tasks }) {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">In Complete Tasks</h1>
      <Cards tasks={tasks} filterStatus="In Complete" />
    </div>
  );
}

export default ImportantTasks;
