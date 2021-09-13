import React from 'react'

import {Link} from 'react-router-dom'

const Related = () => {
    return (
        <div>
             <div class="related_col">
    <div class="container">
      <h3 class="heading-3 wow fadeInUp animated">Related Course</h3>
      <div class="pad_l_r50">
        <div class="pad_t20">
          <div class="owl-carousel owl-theme">
              <div class="item">
              <div class="cource-card">
                <div class="cources-img"><Link to="/Devops"><img src="images/dev_ops.jpg" alt="Devops"/></Link><Link to="/Devops"><span class="btn">DevOps Course Training</span> </Link></div>
                <div class="cource-card-cnt">
                  <h4>DevOps</h4>
                  <ul>
                    <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Curriculum" class="hvr-icon" /> <span>Curriculum</span> </a></li>
                    <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now" class="hvr-icon" /> <span>Enroll Now</span> </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="cource-card">
                  <div class="cources-img"><Link to="/Python"><img src="images/python.jpg" alt="Python"/></Link> <Link to="/Python"><span class="btn">Phyton Course Training </span> </Link></div>
                <div class="cource-card-cnt">
                  <h4>Python</h4>
                  <ul>
                    <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Curriculum" class="hvr-icon" /> <span>Curriculum</span> </a></li>
                    <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now" class="hvr-icon" /> <span>Enroll Now</span> </a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="item">
              <div class="cource-card">
                <div class="cources-img"><Link to="/DataAnalysis"><img src="images/dataanalysis.jpg" alt="Data Analysis"/></Link> <Link to="/DataAnalysis"> <span class="btn">Data Analysis Course Training</span></Link></div>
                <div class="cource-card-cnt">
                  <h4>Data Analysis</h4>
                  <ul>
                    <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Curriculum" class="hvr-icon" /> <span>Curriculum</span> </a></li>
                    <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now" class="hvr-icon" /> <span>Enroll Now</span> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Related
