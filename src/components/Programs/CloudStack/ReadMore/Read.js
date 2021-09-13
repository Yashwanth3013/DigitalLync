import React from 'react'

const Read = () => {
    return (
        <div>
            <div id="liveprojects" class="modal-fade" role="dialog">
  <button type="button" class="close" data-dismiss="modal">×</button>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div id="liveprojects_slide" class="carousel carousel-fade slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="item active">
              <div class="more_popblock">
                <div class="more_popleft"> <img src="images/python-project1.jpg" alt="Python Project" /> </div>
                <div class="more_popright">
                  <p><strong>Climate change plotting project ( Global Warming ) </strong> </p>
                  <p>In this application, we use a dataset sourced directly from NOAA (National Oceanic and Atmospheric Administration) and plot that data in Python using Matplotlib. <br/>
                    NOAA has a wide variety of structured datasets tracking all parameters of climate, reaching back hundreds of years. For this application, we use a dataset tracking global land and temperature anomalies each June. The dataset reaches all the way back to 1880, hence a lot of data to work with.<br/>
                    Stack Used: Python, MatPlotLib, Pandas </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="more_popblock">
                <div class="more_popleft"> <img src="images/python-project2.jpg" alt="Python Project" /> </div>
                <div class="more_popright">
                  <p><strong>Transaction Fraud Detection (FDS) </strong> </p>
                  <p>Transaction fraud imposes serious threats to e-commerce shopping. As online transactions are becoming more popular hence, the types of online frauds associated with this are also becoming high affecting the financial industry. <br/>
                    This application system has the capability to restrict and block the transaction performed by the attacker from a genuine user’s credit card details. To overcome these fraudulent cases, this system here is developed for the transactions of users.<br/>
                    During registration, we take the required information which is efficient to detect fraudulent user's financial activity. <br/>
                    BLA (Behavior and Location Analysis) is implemented for addressing this problem. An FDS runs at a credit card issuing bank. Each incoming transaction is submitted to the FDS for verification. <br/>
                    Stack Used: Python, MySQL, Django </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="more_popblock">
                <div class="more_popleft"> <img src="images/python-project3.jpg" alt="Python Project" /></div>
                <div class="more_popright">
                  <p><strong>ATM Software Python Project</strong> </p>
                  <p>ATM Simulator project built-in Python that has a python script (atm.py).This is a console-based system which is very easy to use for the user. This system, it contains various transactional functions that include Account Statement, Withdrawing, Depositing amount and changing the pin. <br/>
                    The user enters an existing username, then the system proceeds toward the next procedure i.e asking pin number. When a user passes all these sign-in procedures, he/she can use all those features. It is too user-friendly application where one can check their respective account statements.<br/>
                    Stack Used: Python, MySQL, Files </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="more_popblock">
                <div class="more_popleft"> <img src="images/python-project4.jpg" alt="Python Project" /> </div>
                <div class="more_popright">
                  <p><strong>Expense Tracker </strong> </p>
                  <p>Daily expenses tracker tracks, transactions of day to day bills. This tracker can help people watch their expenses.
                    This is where this application comes in. <br/>
                    An expense tracker is a software tool that allows users to keep track of their expenses. It can also analyze the expenses per user, depending on how advanced it is.
                    With this application, users can set a budget and track their spending so as to make better financial decisions in a fixed duration/time.<br/>
                    Stack Used: Python, SqLite3, Excel </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="more_popblock">
                <div class="more_popleft"><img src="images/python-project5.jpg" alt="Python Project" /></div>
                <div class="more_popright">
                  <p><strong>Education Management system</strong> </p>
                  <p>The project will have the databases that will be easy for managing the data than manually maintained in a document that contains details of all courses offered and techies in the organization, details of all students who walked into the organization and students who certified from the organization.<br/>
                    Lead tracker tracks all the details of students from day one to the end of his/her course which can be used for tracking enrolments, registration, student presence status, students. It supports for enhancing with providing the details for making calls and auto email(SMTP).<br/>
                    Stack used: Python, Django, MySQL </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="more_popblock">
                <div class="more_popleft"> <img src="images/python-project6.jpg" alt="Python Project" /> </div>
                <div class="more_popright">
                  <p><strong>LastPass Password generator </strong> </p>
                  <p>Get the random password generated for the user name passed as an input and making data validations in Collections of Python and also Data manipulations using the SQL database.<br/>
                    Stack Used: Python, OS, Random </p>
                </div>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#liveprojects_slide" data-slide="prev"> </a> <a class="right carousel-control" href="#liveprojects_slide" data-slide="next"> </a>
          <ol class="carousel-indicators">
            <li data-target="#liveprojects_slide" data-slide-to="0" class="active"></li>
            <li data-target="#liveprojects_slide" data-slide-to="1"></li>
            <li data-target="#liveprojects_slide" data-slide-to="2"></li>
            <li data-target="#liveprojects_slide" data-slide-to="3"></li>
            <li data-target="#liveprojects_slide" data-slide-to="4"></li>
            <li data-target="#liveprojects_slide" data-slide-to="5"></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Read
