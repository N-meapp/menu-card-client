"use client";

import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TableContext from "./TableContext";

export default function PlaceOrderModal({ item, setOpen, open }) {
  const [count, setCount] = useState(1);
  const {table,setTable} = useContext(TableContext)

  const updateCount = (action: string) => {
    if (action == "+") {
      setCount(count + 1);
    } else {
      if (count !== 1) {
        setCount(count - 1);
      }
    }
  };

  const placeOrder = () => {
    const body = {
      name: item.name,
      category: item.category,
      prize: item.prize * count,
      quantity: count,
      tablenumber:table
    };

    axios
      .post(`http://127.0.0.1:8000/api/OrderItemsList/`, body)
      .then((response) => {
        console.log("vannuuuu", response.data);
        if (response.data) {
          Swal.fire({
            title: "Order placed!",
            icon: "success",
            timer: 1500, // Optional: auto-close after 1.5 seconds
            showConfirmButton: false, // Optional: hide the confirm button
          }).then((result) => {
            // Function to call after modal closes
            if (
              result.dismiss === Swal.DismissReason.timer ||
              result.isConfirmed
            ) {
              setOpen(false);
            }
          });
        }
      })
      .catch((error) => {
        console.error("vanniillaa", "Error:", error);
      });
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:items-start">
                <div className="w-full flex justify-between">
                  <h1 className="menu-item text-2xl mb-4 text-[#ff9a40]">
                    {item.name}
                  </h1>
                  <h1 className="text-2xl text-[#0c3233] number-font">
                    {item.prize}/-
                  </h1>
                </div>
                <div className="w-full flex justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        updateCount("-");
                      }}
                      className="p-3 rounded-full bg-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <h1 className="content-center font-bold">{count}</h1>
                    <button
                      onClick={() => {
                        updateCount("+");
                      }}
                      className="p-3 rounded-full bg-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1 className="text-2xl text-[#0c3233] number-font">
                    {item.prize * count}.00/-
                  </h1>
                </div>
                {/* <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Deactivate account
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of your data will be permanently removed.
                      This action cannot be undone.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => placeOrder()}
                className="inline-flex w-full justify-center rounded-full bg-[#d5dad78a] px-3 py-2 text-sm font-semibold text-black shadow-sm  sm:ml-3 sm:w-auto"
              >
                Grab a treat
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
