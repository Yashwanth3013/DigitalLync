import React from 'react'
import Case from '../components/courses/FullStackDevelopment/Case'
import Certificate from '../components/courses/FullStackDevelopment/Certificate'
import Course from '../components/courses/FullStackDevelopment/Course'
import FAQ from '../components/courses/FullStackDevelopment/FAQ'
import FullStack from '../components/courses/FullStackDevelopment/FullStack'
import Happy from '../components/courses/FullStackDevelopment/Happy'
import Inspiring from '../components/courses/FullStackDevelopment/Inspiring'
import Key from '../components/courses/FullStackDevelopment/Key'
import Kick from '../components/courses/FullStackDevelopment/Kick'
import LiveProjects from '../components/courses/FullStackDevelopment/LiveProjects'
import Location from '../components/courses/FullStackDevelopment/Location'
import Question from '../components/courses/FullStackDevelopment/Question'
import Related from '../components/courses/FullStackDevelopment/Related'
import Roles from '../components/courses/FullStackDevelopment/Roles'
import Tools from '../components/courses/FullStackDevelopment/Tools'
import Upcoming from '../components/courses/FullStackDevelopment/Upcoming'
import Footer from '../Footer'
import  Header from '../Header'

const ViewFullStack = () => {
    return (
        <div>
            <Header/>
            <FullStack/>
            <Roles/>
            <Key/>
            <Upcoming/>
            <Course/>
            <Tools/>
            <LiveProjects/>
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

export default ViewFullStack
