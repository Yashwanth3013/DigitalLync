import React from 'react'
import Accomadation from '../components/Programs/CloudStack/Accomadation'
import Awards from '../components/Programs/CloudStack/Awards'
import Case from '../components/Programs/CloudStack/Case'
import Certification from '../components/Programs/CloudStack/Certification'
import Cloud from '../components/Programs/CloudStack/Cloud'
import Course from '../components/Programs/CloudStack/Course'
import Covid from '../components/Programs/CloudStack/Covid'
import FAQ from '../components/Programs/CloudStack/FAQ'
import FirstEver from '../components/Programs/CloudStack/FirstEver'
import Key from '../components/Programs/CloudStack/Key'
import Kick from '../components/Programs/CloudStack/Kick'
import LiveProject from '../components/Programs/CloudStack/LiveProject'
import NoCost from '../components/Programs/CloudStack/NoCost'
import Related from '../components/Programs/CloudStack/Related'
import Tool from '../components/Programs/CloudStack/Tool'
import Upcomming from '../components/Programs/CloudStack/Upcomming'
import What from '../components/Programs/CloudStack/What'
import Footer from '../Footer'
import Header from '../Header'

const CloudStackMaster = () => {
    return (
        <div>
            <Header/>
            <Cloud/>
            <Key/>
            <Upcomming/>
            <Course/>
            <Tool/>
            <LiveProject/>  
            <Case/>
            <Awards/>
            <FirstEver/>
            <NoCost/>
            <Covid/>
            <Accomadation/>
            <Certification/>
            <FAQ/>
            <Related/>
            <What/>
            <Kick/>
            <Footer/>
        </div>
    )
}

export default CloudStackMaster
