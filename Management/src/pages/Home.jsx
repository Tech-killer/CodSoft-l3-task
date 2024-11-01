import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex h-[98vh] gap-4">
      <div className="w-1/6 border-4 border-black rounded-xl p-4 flex flex-col bg-green-100">
        <Sidebar />
      </div>
      <div className="bg-blue-400 w-5/6 border-2 border-black rounded-xl p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;