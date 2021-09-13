import React from 'react'
import Case from '../components/courses/DataAnalysis/Case'
import Course from '../components/courses/DataAnalysis/Course'
import Data from '../components/courses/DataAnalysis/Data'
import FAQ from '../components/courses/DataAnalysis/FAQ'
import Happy from '../components/courses/DataAnalysis/Happy'
import Inspiring from '../components/courses/DataAnalysis/Inspiring'
import Life from '../components/courses/DataAnalysis/Life'
import LiveProject from '../components/courses/DataAnalysis/LiveProject'
import Location from '../components/courses/DataAnalysis/Location'
import Question from '../components/courses/DataAnalysis/Question'
import Related from '../components/courses/DataAnalysis/Related'
import Role from '../components/courses/DataAnalysis/Role'
import Upcoming from '../components/courses/DataAnalysis/Upcoming'
import Why from '../components/courses/DataAnalysis/Why'
import Footer from '../Footer'
import Header  from '../Header'

const DataAnalysis = () => {
    return (
        <div>
            <Header/>
            <Data/>
            <Role/>
            <Why/>
            <Upcoming/>
            <Course/>
            <LiveProject/>
            <Case/>
            <FAQ/>
            <Related/>
            <Life/>
            <Happy/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Footer/>
            
            
        </div>
    )
}

export default DataAnalysis
