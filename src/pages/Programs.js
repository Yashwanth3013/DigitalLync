import React from 'react'
import All from '../components/Programs/Program/All'
import Happy from '../components/Programs/Program/Happy'
import Inspiring from '../components/Programs/Program/Inspiring'
import Life from '../components/Programs/Program/Life'
import Location from '../components/Programs/Program/Location'
import Pro from '../components/Programs/Program/Pro'
import Question from '../components/Programs/Program/Question'
import Footer from '../Footer'
import  Header from '../Header'

const Programs = () => {
    return (
        <div>
            <Header/>
            <Pro/>
            <All/>
            <Life/>
            <Happy/>
            <Inspiring/>
            <Question/>
            <Location/>
            <Footer/>
        </div>
    )
}

export default Programs
