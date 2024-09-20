import React, { useEffect, useState } from "react";
import OrdersModal from "../OrdersModal";
import axios from "axios";

function Header(){
   
    const [open, setOpen] = useState(false)
    const [isModalOn,setIsModalOn] = useState(false);

    useEffect(()=>{
        // axios.get()
    })
    
    return(
        <>
        <div className="h-80 w-auto bg-[#d5dad78a] rounded-br-[200px]">
        <h1 className="headone text-6xl">Tasty food <br /> for every <br /> mood</h1>
        <img className="home-img w-1/2" src="./src/assets/food2.png" alt="" />
    </div>
    {/* <div onClick={()=>{
        setOpen(true)
        setIsModalOn(true)
    }} className="w-20 h-20 bg-[#3f5b4fbf] text-[white] rounded-full fixed z-10 right-5 bottom-5 text-center content-center font-bold">
        orders
        </div>
        {isModalOn?
            <OrdersModal open={open} setOpen={setOpen}  />:
            null
            } */}
        </>
    )
}


export default Header;