import React from 'react';
import './style.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import TodoPage from "./components/pages/TodoPage";



function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className={'cont'}>
                <Routes>
                    <Route path='/' element={<TodoPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;

