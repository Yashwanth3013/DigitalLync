import React from 'react'
import Case from '../components/courses/Python/Case'
import Certificate from '../components/courses/Python/Certificate'
import Course from '../components/courses/Python/Course'
import FAQ from '../components/courses/Python/FAQ'
import Happy from '../components/courses/Python/Happy'
import Inspiring from '../components/courses/Python/Inspiring'
import Key from '../components/courses/Python/Key'
import Kick from '../components/courses/Python/Kick'
import LiveProjects from '../components/courses/Python/LiveProjects'
import Location from '../components/courses/Python/Location'
import Py from '../components/courses/Python/Py'
import Question from '../components/courses/Python/Question'
import Related from '../components/courses/Python/Related'
import Role from '../components/courses/Python/Role'
import Tool from '../components/courses/Python/Tool'
import Upcoming from '../components/courses/Python/Upcoming'
import Footer from '../Footer'
import Header from '../Header'

const Python = () => {
    return (
        <div>
            <Header/>
            <Py/>
            <Role/>
             <Key/>
             <Upcoming/>
             <Course/>
             <Tool/>
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

export default Python
