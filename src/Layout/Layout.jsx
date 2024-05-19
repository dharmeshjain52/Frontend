import React from "react";
import Drawer from "../Components/Drawer/Drawer";
import {Outlet} from "react-router-dom"

export default function Layout(){
    return(
        <>
        <div className="flex flex-row w-full">
        <Drawer/>
        <Outlet/>
        </div>
        </>
    )
}