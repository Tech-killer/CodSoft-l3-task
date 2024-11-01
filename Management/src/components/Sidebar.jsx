import React from "react";
import { SiGoogletasks } from "react-icons/si";
import { MdIncompleteCircle } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  const data = [
    { icon: <SiGoogletasks />, title: "All tasks", link: "/" },
    { icon: <MdIncompleteCircle />, title: "Incompleted tasks", link: "/importanttasks" },
    { icon: <SiGoogletasks />, title: "Completed tasks", link: "/completedtasks" },
    { icon: <MdPendingActions />, title: "Pending tasks", link: "/pendingtasks" },
  ];

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Project Management Tool</h1>
        <h2 className="my-2 text-gray-400">itsme@gmail.com</h2>
      </div>
      <hr className="border-black my-2" />
      <div className="my-2">
        {data.map((item, index) => (
          <Link
            key={index}
            className="flex items-center hover:bg-gray-300 hover:text-blue-600 p-2 rounded transition duration-200"
            to={item.link}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.title}
          </Link>
        ))}
        <div className="mt-4"></div>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-700 transition duration-200"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
