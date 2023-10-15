import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Sidebar = forwardRef(({ showNav }, ref) => {
  return (
    <aside
      ref={ref}
      className="fixed w-56 h-full bg-white border-r-2 border-gray-200 shadow-lg"
    >
      <div className="flex justify-center mt-6 mb-14">
        <img
          src="https://www.svgrepo.com/show/438908/travel.svg"
          className="w-20 h-auto"
          alt="company logo"
        />
      </div>

      <div className="flex flex-col">
        <Link to="/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            
            `}
          >
            <div className="mr-2"></div>
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/users">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
           
            `}
          >
            <div className="mr-2"></div>
            <p>Users</p>
          </div>
        </Link>
        <Link to="/banner">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            `}
          >
            <div className="mr-2"></div>
            <p>Banners</p>
          </div>
        </Link>
        <Link to="/promos">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            `}
          >
            <div className="mr-2"></div>
            <p>Promos</p>
          </div>
        </Link>
        <Link to="/categories">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            `}
          >
            <div className="mr-2"></div>
            <p>Categories</p>
          </div>
        </Link>
        <Link to="/activities">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            `}
          >
            <div className="mr-2"></div>
            <p>Activities</p>
          </div>
        </Link>
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
