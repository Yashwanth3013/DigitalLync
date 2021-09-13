import React from 'react'

import {Link} from 'react-router-dom'

const LiveProjects = () => {
    return (
        <div>
             <div class="livepro_col">
    <div class="container">
      <h3 class="heading-3 wow fadeInUp animated">Live Projects</h3>
      <div class="pad_l_r50">
        <div class="row pad_t50">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/python-project1.jpg" alt="Python Project" /></div>
              <div class="pro-card-cnt">
                <h4>Climate change plotting project ( Global Warming ) </h4>
                <p>In this application, we use a dataset sourced directly from NOAA (National Oceanic and Atmospheric Administration) and plot that data in Python using.. </p>
                <Link to="/Read" class="readmore" data-slide-to="0" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></Link> </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/python-project2.jpg" alt="Python Project" /></div>
              <div class="pro-card-cnt">
                <h4>Transaction Fraud Detection (FDS)</h4>
                <p>Transaction fraud imposes serious threats to e-commerce shopping. As online transactions are becoming more popular hence, the types of online frauds associated with this are also... </p>
                <Link to="/Read"class="readmore" data-slide-to="1" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></Link></div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/python-project3.jpg" alt="Python Project" /></div>
              <div class="pro-card-cnt">
                <h4>ATM Software Python Project</h4>
                <p>ATM Simulator project built-in Python that has a python script (atm.py).This is a console-based system which is very easy to use for the user. This system, it contains various transactional... </p>
                <Link to="/Read"class="readmore" data-slide-to="2" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></Link></div>
            </div>
          </div>
        </div>
        <div class="row pad_t50">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/python-project4.jpg" alt="Python Project" /></div>
              <div class="pro-card-cnt">
                <h4>Expense Tracker </h4>
                <p>Daily expenses tracker tracks, transactions of day to day bills. This tracker can help people watch their expenses.
                  This is where this application comes... </p>
                <Link to="/Read" class="readmore" data-slide-to="3" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></Link> </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/python-project5.jpg" alt="Python Project" /></div>
              <div class="pro-card-cnt">
                <h4>Education Management system</h4>
                <p>The project will have the databases that will be easy for managing the data than manually maintained in a document that contains details of all courses offered and techies in the... </p>
                <Link to="/Read" class="readmore" data-slide-to="4" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></Link></div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div class="pro-card wow fadeInUp animated">
              <div class="pro-card-img"><img src="images/python-project6.jpg" alt="Python Project" /></div>
              <div class="pro-card-cnt">
                <h4>LastPass Password generator</h4>
                <p>Get the random password generated for the user name passed as an input and making data validations in Collections of Python and also Data manipulations using the SQL... </p>
                <Link to="/Read" class="readmore" data-slide-to="5" data-toggle="modal" data-target="#liveprojects">Read More <span class="fa fa-angle-down"></span></Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
            
        </div>
    )
}

export default LiveProjects
