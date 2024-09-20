import axios from "axios";
import React, { useState } from "react";

function EachTableOrder({
  item,
  setCurrentItem,
  setStatusUpdated,
  setItemArray,
}) {
  const [status, setStatus] = useState(item.result);

  setStatusUpdated(false);

  // console.log(item, "itemmm");

  const updateStatus = (state: string) => {
    // setStatus(state)

    const body = {
      result: state,
    };
    axios
      .put(`http://127.0.0.1:8000/api/Update_order_placing/${item.id}/`, body)
      .then(async (response) => {
        // console.log('orders list',response.data);
        setStatusUpdated(true);

        await axios
          .get("http://127.0.0.1:8000/api/OrderItemsList/")
          .then((response) => {
            console.log("vannuuuu", response.data);
            setItemArray(response.data);
          })
          .catch((error) => {
            console.error("vanniillaa", "Error:", error);
          });
      })
      .catch((error) => {
        console.error("vanniillaa", "Error:", error);
      });
  };

  return (
    <>
      <tr
        className={`'bg-[#80808029]':'odd:bg-white odd:dark:bg-gray-900 even:bg-[#f4fff4] even:dark:bg-gray-800  dark:border-gray-700' border-b`}
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <h1 className="w-[40px] h-[40px] bg-black text-white text-center content-center rounded-full font-bold text-base">
            {item.tablenumber}
          </h1>
        </th>
        <td className="px-6 py-4">
          <h1 className="px-3 py-2 bg-black text-white text-center content-center rounded-full font-bold text-sm">
            {" "}
            {item.name}
          </h1>
        </td>
        <td className="px-6 py-4">{item.category}</td>
        <td className="px-6 py-4">
          {" "}
          <h1 className="w-[40px] h-[40px] bg-black text-white text-center content-center rounded-full font-bold text-base">
            {item.quantity}
          </h1>
        </td>
        <td className="px-6 py-4">{item.prize}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              updateStatus("placed");
            }}
            className={`${
              item.result == "placed"
                ? "bg-green-300 text-white"
                : "border border-green-500 text-black"
            } py-2 px-3 rounded-full text-xs font-bold`}
          >
            {item.result}
          </button>
        </td>
      </tr>
    </>
  );
}

export default EachTableOrder;
