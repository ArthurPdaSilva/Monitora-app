import { Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import { AuthContext } from "../contexts/auth";

export default function PublicRoutes({children}){
    const { signed, user } = useContext(AuthContext);
    
    if(!signed) return children;
    else if(user.occupation === "admin") return <Navigate to="/admin"/>;
    return <Navigate to="/home"/>
}