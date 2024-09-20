import React, { useState } from "react";
import PlaceOrderModal from "../PlaceOrderModal";

function EachItem({item:item}){


    const [open, setOpen] = useState(false)
    const [isModalOn,setIsModalOn] = useState(false);

    return(
        <>
        <div className="pb-6 pt-6 mb-10 mx-4 px-4 bg-[#f6f9f7] rounded-3xl flex gap-4">
        <div className="w-[30%] content-center">
            <img src={`http://127.0.0.1:8000${item.image}`} className="item-img" alt="" />
        </div>
        <div className="w-[70%]">
            <h1 className="menu-item text-2xl mb-4 text-[#ff9a40]">{item.name}</h1>
            <div className="flex justify-around gap-5">
                <h1 className="text-base text-[#0c3233] number-font">{item.prize}</h1>
            <button onClick={()=>{
                setOpen(true)
                setIsModalOn(true)
            }} className="px-5 placeorder rounded-full py-2 font-medium text-sm text-[#f6f9f7] bg-[#000000]">eat</button>
            </div>

        </div>
    </div>

{isModalOn?
<PlaceOrderModal item={item} open={open} setOpen={setOpen}  />:
null
}


        </>
    )
}

export default EachItem;