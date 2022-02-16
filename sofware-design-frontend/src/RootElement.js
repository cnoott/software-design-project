import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RootElement = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<App/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RootElement;
