import React from 'react'

import {Link} from 'react-router-dom'

const Exclusive = () => {
    return (
        <div>
         <div class="text-center "> <Link to="/AllCourses" class="button-course getStartedButton radiusround hvr-icon-up mt-5 shadow-lg wow fadeInUp animated"> <span>View All Courses</span></Link></div>
      <div class="pad_t70">
      <h3 class="heading-3 wow fadeInUp animated">Exclusive  Programs</h3>
      </div>
    <div class="row nopad pad_t50">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="pro-card cource-card wow fadeInUp animated">
          <div class="cources-img"><Link to="/JobReady"><img src="images/jobreadyimg.jpg" alt="Digital Lync Job Ready Programs" title="Digital Lync Job Ready Programs"/></Link> <Link to="/JobReady"><span class="btn">Job Ready Program</span></Link></div>
          <div class="cource-card-cnt">
            <h4>Job Ready Program</h4>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Download monochrome- Digital Lync Training Courses Curriculum" title="Download monochrome- Digital Lync Training Courses Curriculum" /> <span>Curriculum</span> </a></li>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now Tick Mark- Digital Lync Training Courses" title="Enroll Now Tick Mark- Digital Lync Training Courses" /> <span>Enroll Now</span> </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class=" pro-card cource-card wow fadeInUp animated">
          <div class="cources-img"><Link to="/FullStack"><img src="images/fullstacdev.jpg" alt="Best Full Stack Masters Online Training Course: Digital Lync Training Institute" title="Best Full Stack Masters Online Training Course: Digital Lync Training Institute"/></Link> <Link to="/FullStack"><span class="btn">Fullstack Masters Program</span></Link></div>
          <div class="cource-card-cnt">
            <h4>Fullstack Training Masters</h4>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Download monochrome- Digital Lync Training Courses Curriculum" title="Download monochrome- Digital Lync Training Courses Curriculum" /> <span>Curriculum</span> </a></li>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now Tick Mark- Digital Lync Training Courses" title="Enroll Now Tick Mark- Digital Lync Training Courses" /> <span>Enroll Now</span> </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="pro-card cource-card wow fadeInUp animated">
          <div class="cources-img"><Link to="/CloudStack"><img src="images/bigdata.jpg" alt="Best CloudOps Masters Training Courses: Digital Lync Training Institute" title="Best CloudOps Masters Training Courses: Digital Lync Training Institute"/></Link> <Link to="/CloudStack"><span class="btn">CloudOps Masters Program</span></Link></div>
          <div class="cource-card-cnt">
            <h4> CloudOps Masters</h4>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Download monochrome- Digital Lync Training Courses Curriculum" title="Download monochrome- Digital Lync Training Courses Curriculum" /> <span>Curriculum</span> </a></li>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now Tick Mark- Digital Lync Training Courses" title="Enroll Now Tick Mark- Digital Lync Training Courses" /> <span>Enroll Now</span> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

      
      
    
  </div>

    )
}

export default Exclusive
