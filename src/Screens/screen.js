import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import FAQ from '../Components/FAQ/FAQ'

import { Route } from 'react-router-dom'

function screen() {
    return (
        <div className="bg-[#FFFFDD] w-[100%]">
            <Navbar />
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/aboutUs">
                <AboutUs />
            </Route>
            <Route path="/FAQ">
                <FAQ />
            </Route>
        </div>
    )
}

export default screen
