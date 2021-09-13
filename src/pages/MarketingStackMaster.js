import React from 'react'
import Accomadation from '../components/Programs/MarketingStack/Accomadation'
import Awards from '../components/Programs/MarketingStack/Awards'
import Case from '../components/Programs/MarketingStack/Case'
import Certification from '../components/Programs/MarketingStack/Certification'
import Course from '../components/Programs/MarketingStack/Course'
import Covid from '../components/Programs/MarketingStack/Covid'
import FAQ from '../components/Programs/MarketingStack/FAQ'
import FirstEver from '../components/Programs/MarketingStack/FirstEver'
import Key from '../components/Programs/MarketingStack/Key'
import Kick from '../components/Programs/MarketingStack/Kick'
import LiveProject from '../components/Programs/MarketingStack/LiveProject'
import Marketing from '../components/Programs/MarketingStack/Marketing'
import NoCost from '../components/Programs/MarketingStack/NoCost'
import Related from '../components/Programs/MarketingStack/Related'
import Tool from '../components/Programs/MarketingStack/Tool'
import Upcomming from '../components/Programs/MarketingStack/Upcomming'
import What from '../components/Programs/MarketingStack/What'
import Footer from '../Footer'
import Header from '../Header'

const MarketingStackMaster = () => {
    return (
        <div>
            <Header/>
            <Marketing/>
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

export default MarketingStackMaster
