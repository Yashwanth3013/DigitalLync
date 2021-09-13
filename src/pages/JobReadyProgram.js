import React from 'react'
import Awards from '../components/Programs/JobReady/Awards'
import Choose from '../components/Programs/JobReady/Choose'
import FAQ from '../components/Programs/JobReady/FAQ'
import FirstEver from '../components/Programs/JobReady/FirstEver'
import Get from '../components/Programs/JobReady/Get'
import Job from '../components/Programs/JobReady/Job'
import Kick from '../components/Programs/JobReady/Kick'
import Location from '../components/Programs/JobReady/Location'
import Ourteam from '../components/Programs/JobReady/Ourteam'
import What from '../components/Programs/JobReady/What'
import Work from '../components/Programs/JobReady/Work'
import Footer from '../Footer'
import  Header  from '../Header'

const JobReadyProgram = () => {
    return (
        <div>
            <Header/>
            <Job/>
            <Work/>
            <Get/>
            <Choose/>
            <Awards/>
            <FirstEver/>
            <Ourteam/>
            <What/>
            <FAQ/>
            <Location/>
            <Kick/>
            <Footer/>
        </div>
    )
}

export default JobReadyProgram
