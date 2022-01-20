import React, {useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Home_BTD from './components/Home_BTD';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home_QTV from './components/Home_QTV';

export default function Navigation() {

    return (
            <Router>
                <Routes>
                    <Route path="/home_btd" element={<Home_BTD />} />
                </Routes>
                <Routes>
                    <Route path="/home_qtv" element={<Home_QTV />} />
                </Routes>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            </Router>
    )
}
