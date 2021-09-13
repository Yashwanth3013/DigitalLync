import React from 'react'

import {Link} from 'react-router-dom'

const All = () => {
    return (
        <div>
            <div class="related_col cources_page">
  <div class="container">
    <h3 class="heading-3 wow fadeInUp animated">All Programs</h3>
    <h4 class="heading-12 wow fadeInUp animated">Widely Researched, Cherry Picked and Industry Approved Programs</h4>
    <div class="pad_l_r20">
      <div class="row pad_t20">
        
        
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="pro-card wow fadeInUp animated">
            <div class="pro-card-img"><Link to="/FullStack"><img src="finishing-school/images/fullstackmasterimg.jpg" alt="Full Stack Masters"/></Link></div>
            <div class="related-card-cnt"><Link to="/FullStack"> 
              <h4>Full Stack Masters</h4>
              <br/>
             </Link>
              <ul>
                <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Curriculum" class="hvr-icon" /> <span>Curriculum</span> </a></li>
                <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now" class="hvr-icon" /> <span>Enroll Now</span> </a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="pro-card wow fadeInUp animated">
            <div class="pro-card-img"><Link to="CloudStack"><img src="finishing-school/images/cloudstackimg.jpg" alt="Cloud Stack Masters" class=" "/></Link>
            </div>
            <div class="related-card-cnt"><Link to="/CloudStack">
              <h4>Cloud Stack Masters</h4>
              <br/>
           </Link>
              <ul>
                <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/pdf-download.png" alt="Curriculum" class="hvr-icon" /> <span>Curriculum</span> </a></li>
                <li class="hvr-icon-up"><a href="#" data-toggle="modal" data-target="#get_trained"> <img src="images/enroll_here.png" alt="Enroll Now" class="hvr-icon" /> <span>Enroll Now</span> </a></li>
              </ul>
            </div>
          </div>
        </div>
        
        
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="pro-card wow fadeInUp animated">
            <div class="pro-card-img"><Link to="/MarketingStack"><img src="finishing-school/images/digitalimg.jpg" alt="Marketing Stack Masters" class=" "/>
           </Link></div>
            <div class="related-card-cnt"><Link to="/MarketingStack">
              <h4>Marketing Stack Masters</h4>
               <br/>
            </Link>
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
    )
}

export default All
