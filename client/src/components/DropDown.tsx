import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DropDown({setCategory,category,SetIsCreateClicked}) {

    const [selectedCat,setSelectedCat] = useState(null)

    const [items,setItems] = useState([])

    useEffect(()=>{
        axios
        .get("http://127.0.0.1:8000/api/CategoryItemsList/")
        .then((response) => {
          console.log("category...fetching.....", response.data);
          setItems(response.data);
        })
        .catch((error) => {
          console.error("vanniillaa", "Error:", error);
        });
    },[])

  return (
    <Menu as="div" className="rounded-lg shadow-lg border-[1px] border-[#e0dddd38] bg-gray-50 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900 ring-inset hover:bg-gray-50">
          {selectedCat?selectedCat:category?category:'Category'}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>
      
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">


<div onClick={()=>{
    SetIsCreateClicked('category')
}}>
        <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-center bg-[#E8F5E9] text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
      >create
    </a>
  </MenuItem>
      </div>

{items.map((item:any)=>{

return(
    <>
    <div onClick={()=>{
        setCategory(item.Category_name)
        setSelectedCat(item.Category_name)
    }}>
    <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
    >
      {item.Category_name}
    </a>
  </MenuItem>
    </div>
    </>
)
})}

        </div>
      </MenuItems>
    </Menu>
  )
}
