import React from 'react'

import {Link} from 'react-router-dom'


const Training = () => {
  return (
    <div>
      <div id="main_slider" class="carousel slide lazy" data-ride="carousel" itemscope itemtype="https://schema.org/WPHeader">
    <div itemprop="headline" class="wphedline">Digital Lync</div>
  <div class="carousel-inner">
    <div class="item slidetrain active">
       
      <div class="container">
      <div class="row">
      
      <div class="col-md-5 align-items-center d-flex">
        <div class="">
      
      <h1  itemprop="description" class="wow fadeInUp animated">India’s #1 Training Institute</h1>
      <ul class="wow fadeInUp animated">
      <li>25,000 Trained and Got Better Jobs</li>
      <li>First Ever Hybrid Institute with Classroom & Online</li>
      <li>Real time projects, Interviews and Job Support</li>
      </ul>

      <div class="slidebtns wow fadeInUp animated">
        <a href="#" class="active" data-toggle="modal" data-target="#get_trained">Contact Course Advisor</a>
       <Link to="/AllCourses">View Courses</Link>
        </div>
      </div>
      </div>
      
      <div class="col-md-7 text-center">
        <div class="midrelative"> 
        <img src="images/training-course1.jpg" class="wow fadeInUp animated coursewhitebg" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
      
        <img src="images/training-course-mid.png" class="wow fadeInUp animated trainingmid" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
      
        <Link to="/AWS" class=" " style={{animationDelay: "-2s;"}}>
          <img src="images/awsicon.png" class="wow fadeInUp animated awsicon" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
        </Link>
        <Link to="/Devops" class=" " style={{animationDelay: "-4s;"}}>
            <img src="images/devicon.png" class="wow fadeInUp animated devopsicon" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
          </Link>
          <Link to="/Angular" class=" " style={{animationDelay: "-6s;"}}>
            <img src="images/uiicon.png" class="wow fadeInUp animated uiicon" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
          </Link>
          <Link to="/Fullstack" class=" " style={{animationDelay: "-8s;"}}>
            <img src="images/fullicon.png" class="wow fadeInUp animated fullicon" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
          </Link>
          <Link to="/Python" class=" " style={{animationDelay: "-10s;"}}>
            <img src="images/pythonicon.png" class="wow fadeInUp animated pythonicon" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
          </Link>
          <Link to="/React" class=" " style={{animationDelay: "-12s;"}}>
            <img src="images/reacticon.png" class="wow fadeInUp animated reacticon" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/>
         </Link>
      
      
      
      
      </div>
      

      </div>
      </div>
      </div>
      </div>
      </div>
      
      
      
          </div>

          <div class="godigital lazy">
  <div class="container">
    <div class="cards-flex ">
      <div class="card cardBody shadow-lg mb-5">
        <div class="card-image"> <img src="images/student1.png" class="wow fadeInUp animated" alt="Learn From Best Cartoon- Digital Lync Training Institute" title="Learn From Best Cartoon- Digital Lync Training Institute"/> </div>
        <div class="card-title pt-3">
          <h4 class="display-7 wow fadeInUp animated">Learn From Best</h4>
        </div>
        <div class="card-sub-title">
          <p class="wow fadeInUp animated">We don’t settle or let you settle for nothing less than the BEST.</p>
        </div>
      </div>
      <div class="card cardBody shadow-lg mb-5">
        <div class="card-image"> <img  src="images/student2.jpg" class="wow fadeInUp animated" alt="Boost Your Career with Digital Lync Training Courses" title="Boost Your Career with Digital Lync Training Courses"/> </div>
        <div class="card-title pt-3">
          <h4 class="display-7 wow fadeInUp animated">Boost Your Career</h4>
        </div>
        <div class="card-sub-title">
          <p class="wow fadeInUp animated">More than 70% of the current jobs will be replaced with new Skills – Still looking for reasons to Upskill?</p>
        </div>
      </div>
      <div class="card cardBody shadow-lg mb-5">
        <div class="card-image"> <img src="images/student3.png" class="wow fadeInUp animated" alt="Go Digital- Digital Lync Online Digital Marketing Training Institute" title="Go Digital- Digital Lync Online Digital Marketing Training Institute"/> </div>
        <div class="card-title pt-3">
          <h4 class="display-7 wow fadeInUp animated">Go Digital</h4>
        </div>
        <div class="card-sub-title">
          <p class="wow fadeInUp animated">Don’t let your location disrupt your learning – learn by going digital</p>
      
  
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Training
