import React from 'react'
import Coparate from '../components/home/Coparate'
import Exclusive from '../components/home/Exclusive'
import FirstEver from '../components/home/FirstEver'
import Inspring from '../components/home/Inspring'
import KeyFeatures from '../components/home/KeyFeatures'
import Life from '../components/home/Life'
import Location from '../components/home/Location'
import Question from '../components/home/Question'
import Training from '../components/home/Training'
import Trending from '../components/home/Trending'
import Footer from '../Footer'
import Header from '../Header'
const Home = () => {
    return (
        <div>
            <Header/>
            <Training/>
            <Trending/>
            <Exclusive/>
            <FirstEver/>
            <KeyFeatures/>
            <Coparate/>
            <Life/>
            <Inspring/>
            <Question/>
            <Location/>
            <Footer/>
        </div>
    )
}

export default Home
