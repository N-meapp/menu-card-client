import React, { useState } from "react";
import ItemsTable from "./items/ItemsTable";
import SideBar from "./SideBar";
import CategoriesTable from "./categories/CategoriesTable";
import OrdersCard from "./OrdersCard";
import AddNew from "../admin/addNew/AddNew";


function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('Orders');
  
  return (
    <>
      <div className="">

      
      <SideBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-gray-200 rounded-lg  dark:border-gray-700">
          <div className="grid gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl custom-font text-[#000000] dark:text-[#000000]">
                {selectedTab}
              </p>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-20">
            {selectedTab == "Items" ? (
              <ItemsTable />
            ) : selectedTab == "Categories" ? (
              <CategoriesTable />
            ) : selectedTab == "Orders" ? (
              <OrdersCard />
            ) : selectedTab == "Add new" ? (
              <AddNew />
            ) : (
              <h1>Logout</h1>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
