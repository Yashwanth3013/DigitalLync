import React from 'react'
import Case from '../components/courses/DataScience/Case'
import Certificate from '../components/courses/DataScience/Certificate'
import Course from '../components/courses/DataScience/Course'
import Data from '../components/courses/DataScience/Data'
import FAQ from '../components/courses/DataScience/FAQ'
import Happy from '../components/courses/DataScience/Happy'
import Inspiring from '../components/courses/DataScience/Inspiring'
import Key from '../components/courses/DataScience/Key'
import Kick from '../components/courses/DataScience/Kick'
import LiveProject from '../components/courses/DataScience/LiveProject'
import Location from '../components/courses/DataScience/Location'
import Question from '../components/courses/DataScience/Question'
import Related from '../components/courses/DataScience/Related'
import Roles from '../components/courses/DataScience/Roles'
import Tool from '../components/courses/DataScience/Tool'
import Upcoming from '../components/courses/DataScience/Upcoming'
import Footer from '../Footer'
import  Header from '../Header'

const DataScience = () => {
    return (
        <div>
            <Header/>
            <Data/>
            <Roles/>
            <Key/>
            <Upcoming/>
            <Course/>
            <Tool/>
            <LiveProject/>
            <Case/>
            <Certificate/>
            <FAQ/>
            <Related/>
            <Happy/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Kick/>
            <Footer/>
        </div>
    )
}

export default DataScience
