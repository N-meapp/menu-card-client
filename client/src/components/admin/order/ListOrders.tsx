import React, { useEffect, useState } from "react";
import axios from "axios";
import EachTableOrder from "./EachTableOrder";
function OrdersTable() {
  const [items, setItems] = useState<any>([]);

  const [currentItem, setCurrentItem] = useState<any>(null);
  const [statusUpdated, setStatusUpdated] = useState(false);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/OrderItemsList/")
      .then((response) => {
        // console.log("vannuuuu", response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("vanniillaa", "Error:", error);
      });
  });

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Table Number
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item: any) => {
            return (
              <>
                <EachTableOrder
                        item={item}
                        setCurrentItem={setCurrentItem}
                        setStatusUpdated={setStatusUpdated} setItemArray={setItems}                />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default OrdersTable;
