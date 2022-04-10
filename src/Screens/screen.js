import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/footer'
import Home from '../Components/Home/Home'

import { Route } from 'react-router-dom'

function screen() {
    return (
        <div className="bg-[#FFFFDD] w-[100%]">
            <Navbar />
            <Route path="/" exact>
                <Home />
            </Route>
            <Footer />
        </div>
    )
}

export default screen
