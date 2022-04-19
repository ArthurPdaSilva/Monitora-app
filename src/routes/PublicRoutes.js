import { Navigate } from "react-router-dom";
// import React, { useContext } from 'react';
// import { AuthContext } from "../contexts/auth";

export default function PublicRoutes({children}){
    const signed = localStorage.getItem('users');
    return !signed ? children : <Navigate to="/"/>

}