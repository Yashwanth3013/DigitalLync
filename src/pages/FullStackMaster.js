import React from 'react'
import Case from '../components/Programs/FullStack/Case'
import Certification from '../components/Programs/FullStack/Certification'
import Course from '../components/Programs/FullStack/Course'
import FAQ from '../components/Programs/FullStack/FAQ'
import Full from '../components/Programs/FullStack/Full'
import Happy from '../components/Programs/FullStack/Happy'
import Inspiring from '../components/Programs/FullStack/Inspiring'
import Key from '../components/Programs/FullStack/Key'
import Kick from '../components/Programs/FullStack/Kick'
import LiveProject from '../components/Programs/FullStack/LiveProject'
import Location from '../components/Programs/FullStack/Location'
import Question from '../components/Programs/FullStack/Question'
import RelatedCourses from '../components/Programs/FullStack/RelatedCourses'
import Role from '../components/Programs/FullStack/Role'
import Tool from '../components/Programs/FullStack/Tool'
import Upcoming from '../components/Programs/FullStack/Upcoming'
import Footer from '../Footer'
import Header from '../Header'

const FullStackMaster = () => {
    return (
        <div>
            <Header/>
            <Full/>
            <Role/>
            <Key/>
            <Upcoming/>
            <Course/>
            <Tool/>
            <LiveProject/>
            <Case/>
            <Certification/>
            <FAQ/>
            <RelatedCourses/>
            <Happy/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Kick/>
            <Footer/>
        </div>
    )
}

export default FullStackMaster
