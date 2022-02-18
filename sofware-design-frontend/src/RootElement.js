import React from 'react';
import App from './App';
import Login from './login/Login';
import ClientRegistration from './registration/ClientRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RootElement = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<App />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/client-registration' exact element={<ClientRegistration />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootElement;
