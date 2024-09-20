import React, { useState } from "react";
import AddCategory from "./AddCategory";
import AddItem from "./AddItem";

function AddNew() {

    const [tabClicked,setTabClicked] = useState<string | null>(null)
    const [isCreateClicked,setIsCreateClicked] = useState(false)

    

    
  return (
    <>
    {tabClicked=='category'?
    <AddCategory setBackButton={setTabClicked} />:
    tabClicked=='item'?
    <AddItem isCreateClicked={isCreateClicked} setIsCreateClicked={setIsCreateClicked} setBackButton={setTabClicked} />:
    <>  
      <div className="md:flex justify-around mb-20">
        <div onClick={()=>{
            setTabClicked('category')
        }} className="category-image w-72 h-72 mb-10 rounded-3xl">
          <div className="bg-[#000000a3] h-full w-full text-white rounded-3xl content-center text-center">
            Category
          </div>
        </div>
        <div onClick={()=>{
            setTabClicked('item')
        }} className="food-image w-72 h-72 rounded-3xl">
          <div className="bg-[#000000a3] h-full w-full text-white rounded-3xl content-center text-center">
            Item
          </div>
        </div>
      </div>
    </>
    }
    </>
  );
}

export default AddNew;
