import React from "react";
import './ui/styles/variables.module.css';

// Common CSS
import "./app.css"

import { Routes, Route } from 'react-router-dom'; 
import { Layout } from "./components/Layout";
import { Blogpage } from "./common/Learning/Blogpage";
import { Singlepage } from "./common/Learning/Singlepage";
import Contact from "./domains/Contact/Contact";
import Home from "./domains/Home/Home";


function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Blogpage />} />
                    <Route path="posts/:id" element={<Singlepage />} />
                    <Route path="coontact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}


export default App;
