import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import CompletedTasks from './pages/CompletedTasks';
import PendingTasks from './pages/PendingTasks';
import InputPages from './components/InputPages';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/tasks');
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllTasks tasks={tasks} />} />
            <Route
              path="/importanttasks"
              element={<ImportantTasks tasks={tasks.filter(task => task.isImportant)} />}
            />
            <Route
              path="/completedtasks"
              element={<CompletedTasks tasks={tasks.filter(task => task.status === 'Completed')} />}
            />
            <Route
              path="/pendingtasks"
              element={<PendingTasks tasks={tasks.filter(task => task.status === 'Pending')} />}
            />
            <Route path="/addtask" element={<InputPages onAddTask={handleAddTask} />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

