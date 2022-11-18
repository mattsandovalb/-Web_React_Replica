import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discover from "../components/Discover/Discover";
import Join from "../components/Join/Join";
import Main from "../components/Main/Main";



const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/join" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;