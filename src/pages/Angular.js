import React from 'react'
import Ang from '../components/courses/Angular/Ang'
import Case from '../components/courses/Angular/Case'
import Course from '../components/courses/Angular/Course'
import FAQ from '../components/courses/Angular/FAQ'
import Happy from '../components/courses/Angular/Happy'
import Inspiring from '../components/courses/Angular/Inspiring'
import Life from '../components/courses/Angular/Life'
import LiveProject from '../components/courses/Angular/LiveProject'
import Location from '../components/courses/Angular/Location'
import Question from '../components/courses/Angular/Question'
import Related from '../components/courses/Angular/Related'
import Role from '../components/courses/Angular/Role'
import Upcoming from '../components/courses/Angular/Upcoming'
import Why from '../components/courses/Angular/Why'
import Footer from '../Footer'
import Header from '../Header'

const Angular = () => {
    return (
        <div>
            <Header/>
            <Ang/>
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

export default Angular
