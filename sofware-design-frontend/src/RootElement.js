import React from 'react';
import App from './App';
import Login from './login/Login';
import ClientRegistration from './ClientRegistration';
import ClientProfileManagment from './ClientProfileManagement';
import FuelQuoteForm from './fuel_pages/FuelQuoteForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RootElement = () => {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path='/' exact element={<App/>}/>
                <Route path='/login' exact element={<Login/>}/>
                <Route path='/client-registration' exact elment={<ClientRegistration/>}/>

                <Route path='/client-profile-managment' exact element={<ClientProfileManagment/>}/>
=======
                <Route path='/' exact element={<App />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/client-registration' exact element={<ClientRegistration />} />
                <Route path='/client-profile-managment' exact element={<ClientProfileManagment />} />
>>>>>>> e08f0056c0b9ec24178784f97a888d8a22e712bd

                <Route path='/fuel-quote-form' exact element={<FuelQuoteForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootElement;
