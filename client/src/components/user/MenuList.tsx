import React, { useState, useEffect } from "react";
// import { itemArray } from "../../constants/array";
import EachItem from "./EachItem";
import axios from "axios";

function MenuList({ category: category }) {
  const [items, setItems] = useState<any>([]);
  const [selectedCat,setSelectedCat] = useState(category)
  const [searchItem,setSearchItem] = useState<any>([])
  const [categoryArray, setCategoryArray] = useState<any>([]);


  const fetchCategoryItems=(cat:string)=>{
    const body: any = {
      category: cat,
    };

    axios
      .post("http://127.0.0.1:8000/api/categoryFiltering/", body)
      .then((response) => {
        // console.log("category...fetching.....", response.data);
        setItems(response.data);
        // setSearchItem(response.data)
        setSelectedCat(cat)
      })
      .catch((error) => {
        console.error("vanniillaa", "Error:", error);
      });
  }



    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/CategoryItemsList/")
        .then((response) => {
          // console.log("vannuuuu", response.data);
          setCategoryArray(response.data);
        })
        .catch((error) => {
          console.error("vanniillaa", "Error:", error);
        });
    },[]);


  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/api/MenuItemsList/")
      .then((response) => {
        console.log("items...fetching.....", response.data);
        setItems(response.data);
        setSearchItem(response.data)
      })
      .catch((error) => {
        console.error("vanniillaa", "Error:", error);
      });
  }, []);

  const controlOnchange = (value: string) => {

    setItems(searchItem)
    const key = value.trim();
    let tempArray: any[] = [];
    for (let i = 0; i < searchItem.length; i++) {
      if (searchItem[i].name.toLowerCase().includes(key)) {
        tempArray.push(searchItem[i]);
      }

      console.log(i);

      console.log(tempArray);
      console.log(items,'itemsss');
      

      if (tempArray.length > 0) {
      
        setItems(tempArray);
        setSelectedCat(tempArray[0].category)
      } else {
        // console.log('nothinggggg');
        // setItems(searchItem)
      }
    }
  };

  return (
    <>
      <div className="flex mx-auto mt-16 w-[60%]">
        <input
          placeholder="Take a seat"
          onChange={(e) => {
            console.log(e.target.value);
            controlOnchange(e.target.value);
          }}
          className="text-lg search-input px-4 w-full h-12 bg-[#ececec] mx-auto  rounded-full"
        />
        <div className="w-16 h-12 search-button bg-[#000000] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="white"
            className="search-icon size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        {/* <input type="text" /> */}
        {/* <div className="search-button w-14 h-14 bg-[#d1d6d3] rounded-full float-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="search-icon size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </div> */}
        {/* </div> */}
      </div>
      {/* <h2 className="text-3xl headone mt-[50px] ">{category}</h2> */}

      <div className="scrolling-wrapper">
        {categoryArray.map((cat)=>{
            return(
                <>
                <div onClick={()=>{
                  fetchCategoryItems(cat.Category_name)
                }} className={`${cat.Category_name==selectedCat?'bg-black text-white':''} card`}>
          <h2>{cat.Category_name}</h2>
        </div>
             </>
            )
        })}
      </div>


      <div className="h-32 bottom-0 background-shape w-full fixed -z-10"></div>
      <div className="w-full overflow-scroll h-96 mt-10">
        {items?.map((item: any) => {
          return (
            <>
            {item.hide=='False'?
              <EachItem item={item} />:null
            }
            </>
          );
        })}

        {/* <div className="">
        Sorry !
    </div> */}
      </div>
    </>
  );
}

export default MenuList;
