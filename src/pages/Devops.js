import React from 'react'
import Case from '../components/courses/Devops/Case'
import Certificate from '../components/courses/Devops/Certificate'
import Course from '../components/courses/Devops/Course'
import Dev from '../components/courses/Devops/Dev'
import FAQ from '../components/courses/Devops/FAQ'
import Inspiring from '../components/courses/Devops/Inspiring'
import Location from '../components/courses/Devops/Location'
import Placement from '../components/courses/Devops/Placement'
import Question from '../components/courses/Devops/Question'
import RealTime from '../components/courses/Devops/RealTime'
import Role from '../components/courses/Devops/Role'
import Tool from '../components/courses/Devops/Tool'
import Upcoming from '../components/courses/Devops/Upcoming'
import Footer from '../Footer'
import Header from '../Header'

const Devops = () => {
    return (
        <div>
            <Header/>
             <Dev/>
            <Role/>
            <Course/>
            <Tool/>
            <RealTime/>
            <Case/>
            <Certificate/>
            <Placement/>
            <Upcoming/>
            <FAQ/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Footer/>
        </div>
    )
}

export default Devops
