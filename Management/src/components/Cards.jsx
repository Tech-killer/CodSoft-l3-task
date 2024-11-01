import React from 'react';
import { FaEdit, FaThumbsUp, FaTrash, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Cards({ tasks, filterStatus }) {
    const navigate = useNavigate();

    const handleStatusChange = async (index, currentStatus) => {
        const newStatus = currentStatus === "In Complete" ? "Completed" : "In Complete";
        const updatedTask = { ...tasks[index], status: newStatus };

        try {
            const response = await fetch(`http://localhost:4000/api/tasks/${tasks[index]._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            });

            if (response.ok) {
                tasks[index] = updatedTask; 
            } else {
                console.error('Failed to update task status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const handleDelete = async (index) => {
        try {
            const response = await fetch(`http://localhost:4000/api/tasks/${tasks[index]._id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // This would ideally involve updating the state to remove the task
                tasks.splice(index, 1); // Directly mutate for simplicity
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {tasks
                .filter(task => task.status === filterStatus) // Filter by status
                .map((item, i) => (
                    <div key={item._id} className="border border-gray-500 rounded-xl p-4 bg-gradient-to-r from-pink-100 to-purple-400">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <p className="font-bold text-red-500">Deadline: {item.deadline.split('T')[0]}</p>
                        <button 
                            className="bg-blue-500 text-white p-2 rounded-xl w-full flex items-center justify-center hover:bg-blue-700"
                            onClick={() => handleStatusChange(i, item.status)}
                        >
                            <FaEdit className="mr-2" /> {item.status}
                        </button>
                        <button 
                            className="bg-red-500 text-white p-2 rounded-xl w-full flex items-center justify-center mt-2 hover:bg-red-700"
                            onClick={() => handleDelete(i)}
                        >
                            <FaTrash className="mr-2" /> Delete
                        </button>
                        <button 
                            className="bg-green-500 text-white p-2 rounded-xl w-full flex items-center justify-center mt-2 hover:bg-green-700"
                            onClick={() => handleLike(i)}
                        >
                            <FaThumbsUp className="mr-2" /> Like
                        </button>
                    </div>
                ))}
            <button 
                className="bg-yellow-500 text-white p-4 rounded-full flex items-center justify-center hover:bg-yellow-700"
                onClick={() => navigate('/addtask')}
            >
                <FaPlus className="mr-2" /> Add tasks
            </button>
        </div>
    );
}

export default Cards;