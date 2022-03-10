import React from "react";
import './ui/styles/variables.module.css';

// Common CSS
import "./app.css"

import { Routes, Route } from 'react-router-dom'; 
import { Layout } from "./Layout";
import Contact from "./domains/Contact/Contact";
import Home from "./domains/Home/Home";
import { OnePost, PostsStore } from "./stores/BlogStore";
import { observer } from "mobx-react";
import { Blogpage } from "./domains/Blog/components/Blogpage";
import { Singlepage } from "./domains/Blog/components/Singlepage";

const data = new PostsStore()
const onepost = new OnePost()



export const App = observer(() => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Blogpage data={data.list} />} />
                    <Route path="posts/:id" element={<Singlepage data={onepost} />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
})
