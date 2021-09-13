import React from 'react'
import AllCourses from '../components/courses/ViewAllCourses/AllCourses'
import Course from '../components/courses/ViewAllCourses/Course'
import Happy from '../components/courses/ViewAllCourses/Happy'
import Inspiring from '../components/courses/ViewAllCourses/Inspiring'
import Life from '../components/courses/ViewAllCourses/Life'
import Location from '../components/courses/ViewAllCourses/Location'
import Question from '../components/courses/ViewAllCourses/Question'
import Footer from '../Footer'
import Header from '../Header'

const ViewAllCourses = () => {
    return (
        <div>
            <Header/>
            <Course/>
            <AllCourses/>
            <Life/>
            <Happy/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Footer/>   
        </div>
    )
}

export default ViewAllCourses
