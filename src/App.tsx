import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Mainlayout from './layout/Mainlayout';
import Home from './page/Home';
import FullGame from './page/FullGame';
import Cart from './page/Cart';


export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Mainlayout />} >
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/game/:id/" element={<FullGame />} />
            </Route>
        </Routes>
    )
}
export default App

