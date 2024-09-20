import React, { Dispatch, SetStateAction, useState } from "react";

function OneCategory({category,imgClass,hideAll,loadMenu}:{category:any;imgClass:string;hideAll:(hide:string)=>void;loadMenu:any }){



    console.log(category.Category_image);
    

    const [url,setUrl] = useState(`http://127.0.0.1:8000${category.Category_image}`)
    return(
        <>
        <div onClick={()=>{
            hideAll('hidden')
            loadMenu(category.Category_name)
        }} className="h-32 w-3/4 mt-10 m-auto relative bg-[#f6f9f7] content-center text-center rounded-3xl">
    <h3 className="cat-list text-[115%] text-[#546E7A]">{category.Category_name}</h3>
    <img className={imgClass} src={url} alt="" />
    </div>

   
        </>
    )
}

export default OneCategory;