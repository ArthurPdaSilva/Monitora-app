import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Error from '../pages/Error';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={
                <PublicRoutes>
                    <Login/>
                </PublicRoutes>
            }/>

            <Route path="/home" element={
                <PrivateRoutes>
                    <Home/>
                </PrivateRoutes>
            }/>

            <Route path="/admin" element={
                <PrivateRoutes>
                    <Admin/>
                </PrivateRoutes>
            }/>
            
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}