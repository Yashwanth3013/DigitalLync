import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
       <div>
               <header class="header">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12"> <Link to="/Home" class="logo"><img src="images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" alt="Digital Lync- Best AWS, DevOps, Python, Digital Marketing Training Institute" title="Digital Lync- Best AWS, DevOps, Python, Digital Marketing Training Institute"/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class=""></span> <span class=""></span> <span class=""></span></button>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
        <nav class="collapse navbar-collapse collapse text-right" id="navbarSupportedContent">
          <ul class="nav navbar-nav cl-effect-12">
            <li class="menu relative"><Link to="/AllCourses" itemprop="url"><span itemprop="name">Courses</span> <svg class="expand-tree_pointerDown__3pD5B" height="7" viewBox="0 0 12 7" width="12"><path d="m105 46 5 5 5-5" fill="none" stroke="#96a0aa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(-104 -45)"></path></svg></Link>
            
              <ul class="submenu">
                <li class="menu "><Link to="/Fullstack" itemprop="url"><span itemprop="name">Full Stack Development</span></Link></li>
                <li class="menu "><Link to="/AWS" itemprop="url"><span itemprop="name">AWS</span></Link></li>
                <li class="menu "><Link to="/Python" itemprop="url"><span itemprop="name">Python</span></Link></li>
                <li class="menu "><Link to="/Devops" itemprop="url"><span itemprop="name">DevOps </span></Link></li>
               
                <li class="menu "><Link to="/Angular" itemprop="url"><span itemprop="name">Angular</span></Link></li>
                <li class="menu "><Link to="/React" itemprop="url"><span itemprop="name">React JS</span></Link></li>
                 
                <li> <hr/>  </li>
                <li class="menu viewall"><Link to="/AllCourses" itemprop="url"><span itemprop="name"> View All Courses</span></Link></li>
              </ul>
            
            </li>
            
            
            
            			           

            
            
            <li class="menu relative"><Link to="/Program" itemprop="url"><span itemprop="name">Programs</span> <svg class="expand-tree_pointerDown__3pD5B" height="7" viewBox="0 0 12 7" width="12"><path d="m105 46 5 5 5-5" fill="none" stroke="#96a0aa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(-104 -45)"></path></svg></Link>
            
              <ul class="submenu">
                <li class="menu "><Link to="/FullStack" itemprop="url"><span itemprop="name">Full Stack Masters</span></Link></li>
                <li class="menu "><Link to="/CloudStack" itemprop="url"><span itemprop="name">Cloud Stack Masters</span></Link></li>
                <li class="menu "><Link to="/MarketingStack" itemprop="url"><span itemprop="name">Marketing Stack Masters</span></Link></li>
                <li class="menu "><Link to="/JobReady" itemprop="url"><span itemprop="name">Job Ready Program</span></Link></li>
                </ul> 
            </li>
			   
			  
           <li class="menu"><Link to="/CarrerSupport" itemprop="url"><span itemprop="name">Career Support</span></Link></li>
           <li class="menu"><a href="https://lms.digital-lync.com/" itemprop="url" target="_blank"><span itemprop="name">Sign In</span></a></li>
              
           <li class="get_link"><a href="#" data-toggle="modal" data-target="#get_trained" itemprop="url"> <span itemprop="name">Get Skilled</span> </a></li>
           
          </ul>
        </nav>
        
      </div>
    </div>
  </div>
</header>
       </div> 
  )
}

export default Header
