import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './layout/Main';
import Cart from './layout/Cart';


export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    )
}
export default App