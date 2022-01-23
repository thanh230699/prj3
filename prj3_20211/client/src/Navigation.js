import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    /* Link,
    useRouteMatch,
    useParams, */
} from "react-router-dom";

import Home_BTD from './components/Home_BTD';
import SignIn from './components/SignIn';

import Home_QTV from './components/Home_QTV';
import Danhsach from './components/Danhsach';
import Tuyendung from './components/Tuyendung';
import Tieuchi from './components/Tieuchi';
import Ungvien from './components/options/Ungvien'



export default function Navigation() {
    const role = localStorage.getItem('role') || null;
    

    const setRoleUser = (rolex) => {
        localStorage.setItem('role', rolex);
    }


    const toRoute = () => {
        if(role == "1") {
    
            return (
                <Routes>
                <Route path="/home_qtv" element={<Home_QTV />} >

                </Route>
            </Routes>
            )
        } else if(role == "2"){
            return (
                <Routes>
                <Route path="/home_btd" element={<Home_BTD />} >
                    {/* router con */}
                    <Route
                        path="/home_btd/uv"
                        element={<Ungvien />}
                    />
                    <Route
                        path="/home_btd/td"
                        element={<Tuyendung />}
                    />
                    <Route
                        path="/home_btd/tc"
                        element={<Tieuchi />}
                    />
                    <Route
                        path="/home_btd/ds"
                        element={<Danhsach />}
                    />
                </Route>
            </Routes>
            )
        }else {
            return (
                <Routes>
                <Route path="/signin" element={<SignIn  setRole={setRoleUser}/>} />
            </Routes>
            )
        }
    }

    return (
        <Router>
            
           {toRoute()}
            <Routes>
                <Route path="/danhsach" element={<Danhsach />} />
            </Routes>

           
        </Router>

    )
}
