import axios from "axios";
import React, { useState } from "react";

function EachTableItem({item,setCurrentItem}){


    const [isHidden,setIsHidden] = useState(item.hide)
    
    console.log(item,'itemmm');
    // console.log('ishidden',isHidden);
    
    

    const updateStatus = (state:string)=>{

      setIsHidden(state)

      console.log(state);
      

      const body = {
          hide:state
      }
      axios.put(`http://127.0.0.1:8000/api/Update_hide/${item.id}/`,body).then(response => {
          console.log('vannuuuu',response.data);
          setIsHidden(state)

        })
        .catch(error => {
          console.error('vanniillaa','Error:', error,);
        });
  }


    return(
        <>
      <tr className={`${isHidden=='True'?'bg-[#80808029]':'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800  dark:border-gray-700'} border-b`}>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                {/* {item.image} */}
                <img src={`http://127.0.0.1:8000${item.image}`} className="admin-item-image w-10 h-10" alt="" />
                </td>
                <td className="px-6 py-4">
                    {item.category}
                </td>
                <td className="px-6 py-4">
                    {item.prize}
                </td>
                <td className="px-6 py-4 flex gap-5">
          <button onClick={()=>{
                setCurrentItem(item)
          }} className="bg-[#c8ffc8] p-2 rounded-full text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </button>
          {isHidden=='True'? (
            <button onClick={()=>{
                updateStatus('False')
            }}
             className="bg-[#c1fbf7] p-2 rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button onClick={()=>{
                updateStatus('True')
            }} className="bg-[#fbc5c1] p-2 rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
              </svg>
            </button>
          )}
        </td>
            </tr>
        </>
    )
}

export default EachTableItem;