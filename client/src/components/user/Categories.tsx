import React, { useEffect, useState } from "react";
import { catArray } from "../../constants/array";
import OneCategory from "./OneCategory";
import MenuList from "./MenuList";
import axios from "axios";

function Categories(){

    return(
        <>

    <MenuList category={null} />
        </>
    )
}


export default Categories;