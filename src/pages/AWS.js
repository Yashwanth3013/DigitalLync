import React from 'react'
import Aws from '../components/courses/AWS/Aws'
import Case from '../components/courses/AWS/Case'
import Certificate from '../components/courses/AWS/Certificate'
import Course from '../components/courses/AWS/Course'
import FAQ from '../components/courses/AWS/FAQ'
import Inspiring from '../components/courses/AWS/Inspiring'
import Location from '../components/courses/AWS/Location'
import Placements from '../components/courses/AWS/Placements'
import Question from '../components/courses/AWS/Question'
import RealTime from '../components/courses/AWS/RealTime'
import Role from '../components/courses/AWS/Role'
import Tools from '../components/courses/AWS/Tools'
import Upcoming from '../components/courses/AWS/Upcoming'
import Footer from '../Footer'
import Header from '../Header'

const AWS = () => {
    return (
        <div>
            <Header/>
            <Aws/>
            <Role/>
            <Course/>
            <Tools/>
            <RealTime/>
            <Case/>
            <Certificate/>
            <Placements/>
            <Upcoming/>
            <FAQ/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Footer/>
        </div>
    )
}

export default AWS
