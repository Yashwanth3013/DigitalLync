import React from 'react'

import {Link} from 'react-router-dom'

const Trending = () => {
    return (
        <div>
           <div class="cources_curve"> <img src="images/courses-background.jpg" class="" alt="Digital Lync Training Courses- ivory website background" title="Digital Lync Training Courses- ivory website background"/> </div>
<div class="cources_col">
  <div class="container">
    <h3 class="heading-3 wow fadeInUp animated">Trending Courses</h3>
    <h5 class="heading-9 wow fadeInUp animated">Widely Researched, Cherry Picked and Industry Approved Courses</h5>
    <div class="row pad_t50">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="cource-card wow fadeInUp animated">
            <div class="cources-img"><Link to="/AWS"><img src="images/aws.jpg" alt="Digital Lync- Best AWS Online Training Institute" title="Digital Lync- Best AWS Online Training Institute" /></Link> <Link to="/AWS"><span class="btn">AWS Course Training</span></Link></div>
          <div class="cource-card-cnt">
            <h4> AWS</h4>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Download monochrome- Digital Lync Training Courses Curriculum" title="Download monochrome- Digital Lync Training Courses Curriculum" /><span>Curriculum</span> </a></li>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now Tick Mark- Digital Lync Training Courses" title="Enroll Now Tick Mark- Digital Lync Training Courses" /> <span>Enroll Now</span> </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="cource-card wow fadeInUp animated">
            <div class="cources-img"><Link to="/Python"><img src="images/python.jpg" alt="Best Python Online Training Course: Digital Lync Training Institute" title="Best Python Online Training Course: Digital Lync Training Institute"/></Link> <Link to="/Python"><span class="btn">Python Course Training</span></Link></div>
          <div class="cource-card-cnt">
            <h4>Python </h4>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Download monochrome- Digital Lync Training Courses Curriculum" title="Download monochrome- Digital Lync Training Courses Curriculum" /> <span>Curriculum</span> </a></li>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now Tick Mark- Digital Lync Training Courses" title="Enroll Now Tick Mark- Digital Lync Training Courses" /> <span>Enroll Now</span> </a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <div class="cource-card wow fadeInUp animated">
            <div class="cources-img"><Link to="/Devops"><img src="images/dev_ops.jpg" alt="Best Devops Online Training Course: Digital Lync Training Institute" title="Best Devops Online Training Course: Digital Lync Training Institute"/></Link> <Link to="/Devops"><span class="btn">DevOps Course Training</span></Link></div>
          <div class="cource-card-cnt">
            <h4>Devops</h4>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Download monochrome- Digital Lync Training Courses Curriculum" title="Download monochrome- Digital Lync Training Courses Curriculum" /> <span>Curriculum</span> </a></li>
              <li><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now Tick Mark- Digital Lync Training Courses" title="Enroll Now Tick Mark- Digital Lync Training Courses" /> <span>Enroll Now</span> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
    </div>
    </div>
        </div>
    )
}

export default Trending
