import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBar({setSelectedTab,selectedTab}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [user,setUser] = useState()
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = ()=>{
    
    axios.post('http://127.0.0.1:8000/api/LogoutView/').then(response => {
      // setItemsUpdated(true)
      console.log(response.data,'password response....'); 
      setUser(undefined)
      navigate('/admin')
      // Handle successful upload response
    })
    .catch(error => {
      console.error(error); // Handle upload errors
    });
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-hidden bg-[gray-50] dark:bg-gray-800">
          <div className="h-20"></div>
          <ul className="space-y-2 font-medium">
            <li
              onClick={() => {
                setSelectedTab("Orders");
              }}
            >
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${selectedTab=='Orders'? 'bg-[#e8ebe9]':''}`}
              >
                <img className="w-8 h-8" src="../src/assets/order.png" alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Items");
              }}
            >
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${selectedTab=='Items'? 'bg-[#e8ebe9]':''}`}
              >
                <img
                  className="w-8 h-8"
                  src="../src/assets/food.png"
                  alt=""
                />

                <span className="flex-1 ms-3 whitespace-nowrap">Items</span>
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Categories");
              }}
            >
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${selectedTab=='Categories'? 'bg-[#e8ebe9]':''}`}
              >
                <img
                  className="w-8 h-8"
                  src="../src/assets/category.png"
                  alt=""
                />

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Categories
                </span>
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Add new");
              }}
            >
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${selectedTab=='Add new'? 'bg-[#e8ebe9]':''}`}
              >
                <img className="w-8 h-8" src="../src/assets/add.png" alt="" />

                <span className="flex-1 ms-3 whitespace-nowrap">Add new</span>
              </a>
            </li>
            <li
              onClick={() => {
                handleLogout();
              }}
            >
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                                <img className="w-8 h-8" src="../src/assets/logout.png" alt="" />

                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
