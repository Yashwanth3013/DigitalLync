import React from 'react'

import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div class="modal_caller">
  <div class="head_caller"> <span class="contact_txt_caller">Call Us (Or) Whatsapp Us</span> <a class="close_call_btn_caller" href="javascript:;"> <img src="images/call_c_c.png" alt="Digital Lync- Call" title="Digital Lync- Call"/></a> </div>
  <div class="content_caller"> <a class="popupNumber" href="tel:+916304982304">+91 63049 82304</a></div>
</div>
<footer class="footer footerwhite">
  <div class="container">

<div class="row">
<div class="col-md-3 text-center">
 <Link to="/Home"><img src="images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" alt="Logo" class="flogo" /></Link>
  <div class="social_icons wow fadeInUp animated">
    <p>Fallow us on</p>
    <ul>
      <li class="d-inline-block"> <a href="https://www.facebook.com/digitallync/" class="fs24" target="_blank"> <i class="fa fa-facebook"></i> </a> </li>
      <li class="d-inline-block"> <a href="https://twitter.com/digitallync?lang=en" class="fs24" target="_blank"> <i class="fa fa-twitter"></i> </a> </li>
      <li class="d-inline-block"> <a href="https://www.linkedin.com/company/10702035/admin/" class="fs24" target="_blank"> <i class="fa fa-linkedin"></i> </a> </li>
        <li class="d-inline-block"> <a href="https://www.instagram.com/_digitallync_/" class="fs24" target="_blank"> <i class="fa fa-instagram"></i> </a> </li>
    </ul>
  </div>

</div>

<div class="col-md-3">
<h5>Digital Lync</h5>
<ul class="fmenu">
<li>  <a href="https://lms.digital-lync.com/#/auth/login" target="_blank">  Sign in / Signup</a> </li>
<li>  <Link to="/CarrerSupport">Career Support</Link></li>
<li class="onp">  <Link to="/OnlinePay">Online Pay</Link></li>
</ul> 
</div>

<div class="col-md-3">
  <h5>Courses</h5>
  <ul class="fmenu">
  <li>  <Link to="/Fullstack">Full Stack Development</Link></li>
  <li>  <Link to="/AWS"> AWS</Link></li>
  <li>  <Link to="/Python"> Python</Link></li>
  <li>  <Link to="/Devops">DevOps</Link></li>
  <li>  <Link to="/Angular"> Angular</Link></li>
  <li>  <Link to="/React"> React Js</Link></li>
  </ul> 
  </div>

  <div class="col-md-3">
    <h5>Programs</h5>
    <ul class="fmenu">
    <li>  <Link to="/FullStack"> Full Stack Masters </Link></li>
    <li>  <Link to="/CloudStack"> Cloud Stack Masters </Link></li> 
    <li>  <Link to="/JobReady"><strong> Jobready program </strong></Link></li> 
    </ul> 
    </div>
  
</div>

 
  </div>
</footer>
<div class="copyright">
  <div class="container"> © Copyright Lync Digital School Pvt. Ltd | 2019 |<Link to="/Privacy"> Privacy Policy</Link></div>
</div>
        </div>
    )
}

export default Footer
