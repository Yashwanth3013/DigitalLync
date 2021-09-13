import React from 'react'
import Carrer from '../components/carrersupport/Carrer'
import DL from '../components/carrersupport/DL'
import Hackthons from '../components/carrersupport/Hackthons'
import Inspiring from '../components/carrersupport/Inspiring'
import Internship from '../components/carrersupport/Internship'
import LiveProject from '../components/carrersupport/LiveProject'
import Onetoone from '../components/carrersupport/Onetoone'
import Welcome from '../components/carrersupport/Welcome'
import Footer from '../Footer'
import Header from '../Header'

const CarrerSupport = () => {
    return (
        <div>
           <Header/>
           <Carrer/>
           <Welcome/>
           <DL/>
           <Hackthons/>
           <LiveProject/>
           <Internship/>
           <Onetoone/>
           <Inspiring/>
           <Footer/> 
        </div>
    )
}

export default CarrerSupport
