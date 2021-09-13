import React from 'react'
import Case from '../components/courses/React/Case'
import Course from '../components/courses/React/Course'
import FAQ from '../components/courses/React/FAQ'
import Happy from '../components/courses/React/Happy'
import Inspiring from '../components/courses/React/Inspiring'
import Life from '../components/courses/React/Life'
import LiveProject from '../components/courses/React/LiveProject'
import Location from '../components/courses/React/Location'
import Question from '../components/courses/React/Question'
import Rea from '../components/courses/React/Rea'
import Related from '../components/courses/React/Related'
import Role from '../components/courses/React/Role'
import Upcoming from '../components/courses/React/Upcoming'
import Why from '../components/courses/React/Why'
import Footer from '../Footer'
import Header from '../Header'

const Reactt = () => {
    return (
        <div>
            <Header/>
            <Rea/>
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

export default Reactt
