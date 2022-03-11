import React from 'react';
import App from './App';
import Login from './login/Login';
import ClientRegistration from './registration/ClientRegistration';
import ClientProfileManagment from './ClientProfileManagement';
import FuelQuoteForm from './fuel_pages/FuelQuoteForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FuelQuoteHistory from './fuel_pages/FuelQuoteHistory';

import PrivateRoute from './auth/PrivateRoute';

const RootElement = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' exact element={<App />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/client-registration' exact element={<ClientRegistration />} />
                <Route exact path='/client-profile-managment' element={<ClientProfileManagment />} />
                <Route path='/fuel-quote-form' exact element={<FuelQuoteForm />} />
                <Route path='/fuel-quote-history' exact element={<FuelQuoteHistory />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootElement;
