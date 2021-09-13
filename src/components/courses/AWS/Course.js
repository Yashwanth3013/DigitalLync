import React from 'react'

const Course = () => {
    return (
        <div>
              <div class="cource_col">
    <div class="container">
      <h3 class="heading-3 wow fadeInUp animated">Course Curriculum</h3>
      <h6 class="heading-4 text-center wow fadeInDown animated">It stretches your mind, think better and create even better.</h6>
      <div class="cource-mid">
        <div class="accordion" id="accordion1">
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="panel-heading card-header" id="headingOne"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne"><span class="number-count">1</span> AWS Overview <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseOne" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Fundamentals of Cloud </p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Fundamentals of Virtualization</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Cloud Service Offerings</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Cloud Deployment Models</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> History and Evolution of AWS</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Overview of AWS Products and Services</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Walk through of AWS Free Tier Account</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> AWS Global Infrastructure</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> AWS Terminologies</p>
              </div>
            </div>
          </div>
            
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header panel-heading" id="headingTwo"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo"><span class="number-count">2</span> Identity and Access Management (IAM)<span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Account & Services Layer</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> IAM Overview</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> IAM Policies</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> IAM Users</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> IAM Groups</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> IAM Roles</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> IAM Best Practices</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hands On</p>
                <div class="pad_l20">
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating an IAM Policy</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating an IAM User</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating an IAM Group</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating an IAM Role</p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingThree"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree"><span class="number-count">3</span> Amazon Virtual Private Cloud (VPC) <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseThree" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Networking Layer</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Traditional Network Components</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Amazon VPC Overview</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> VPC Features</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Default VPC vs Custom VPC</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> VPC Routing Basics</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Gateways</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Subnets</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Route Tables</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> NACL’s</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Security Groups</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> VPC Best Practices</p>
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hands On</p>
                <div class="pad_l20">
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating a custom VPC</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating an Elastic IP Address</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating Subnets</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating Internet Gateways</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating Route Tables</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Creating a Security Group</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Network ACL Overview</p>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingFour"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseFour"><span class="number-count">4</span> Elastic Cloud Compute – EC2 <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseFour" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Virtualization basics</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Amazon EC2 Overview</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Amazon Machine Images (AMI)</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	EC2 Instance Types</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	EC2 Purchase Options</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	User data& Metadata</p>
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Amazon Elastic Block Store (EBS)</p>
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>EBS Snapshots</p>
                                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Placement Groups</p>
                                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	EC2 Best Practices</p>

                
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hands On</p>
                <div class="pad_l20">
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Launch and connect to an EC2 Linux instance</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Launch and connect to an EC2 Windows instance</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Attaching EBS Volumes</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	EBS Snapshots</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Create an AMI</p>
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Copy AMI & Snapshots to other regions</p>
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	User data& Metadata</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingFive"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseFive"><span class="number-count">5</span> Elastic File System <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseFive" class="panel-collapse collapse">
              <div class="card-body">
              
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Introduction To EFS</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> EBS vs EFS vs S3</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Provision EFS</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Connect EFS To Multiple EC2 Instances</p>

              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingSix"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseSix"><span class="number-count">6</span> High Availability <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseSix" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	High Available VPC Design</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Introduction to Load Balancing</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Generic Load Balancer - NGINX</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Classic Load Balancer</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Network Load Balancer</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Application Load Balancer</p>

                          <div class="pad_l20">
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Hands on</p>
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Implementing Generic Load Balancer - NGINX</p>
                                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Implementing Classic Load Balancer</p>
                                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Implementing Network Load Balancer</p>
                                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Implementing Application Load Balancer</p>
</div>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingSeven"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseSeven"><span class="number-count">7</span> Fault Tolerance<span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseSeven" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Introduction to Fault Tolerance</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Launch Configuration</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Auto Scaling Group</p>
              
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>  Hands on</p>
                  <div class="pad_l20"> <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Auto Scaling</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Attach Load Balancer to Auto Scaling</p>
              </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingEight"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseEight"><span class="number-count">8</span> Advanced VPC Techniques<span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseEight" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	VPC Peering</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Bastion Hosts</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Nat Gateway</p>
                
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>   Hands on</p>
                      <div class="pad_l20">
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> VPC Peering</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> Bastion Hosts</p>
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i> 	Nat Gateway</p>
                          </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingNine"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseNine"><span class="number-count">9</span> Relational Database Service<span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseNine" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Databases Overview</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Relational Database Service (RDS) Overview</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	IAAS Database</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	PAAS Database</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Databases best practices</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>RDS Read Replicas</p>
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	RDS Multi AZ Failover</p>
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	RDS With Java Application</p>
                
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingTen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseTen"><span class="number-count">10</span> Amazon Simple Storage Service (S3)<span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseTen" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Amazon S3 Overview</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	S3 Buckets</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Version Control</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Amazon S3 Lifecycle Management</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	CloudFront and CDNs</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Security and Encryption</p>
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Import/Export & Snowball</p>
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Amazon S3 Best Practices</p>
                                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Hands On</p>
                                <div class="pad_l20">
                                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Create and access an Amazon S3 Bucket</p>
                                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Amazon S3 Version Control</p>
                                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Amazon S3 Lifecycle Management</p>
                                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Amazon CloudFront</p>
                                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Security and Encryption</p></div>

              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingEleven"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseEleven"><span class="number-count">11</span> Route 53<span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseEleven" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Amazon Route 53 Overview</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Amazon Route 53 and DNS</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Route 53 Routing Policies</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Route 53 best practices</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Route 53 costs and prices</p>
                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Practice Assignment: Amazon Route 53 Hosted Zone</p>
                
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	  Hands On</p>
                            <div class="pad_l20">
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Route 53 Hosted Zones Demo</p></div>
                
              </div>
            </div>
          </div>
          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingTweley"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseTweley"><span class="number-count">12</span> Application & Monitoring Services <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseTweley" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Simple Notification Service-SNS</p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Simple Queue Service-SQS</p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Simple Workflow Service-SWF</p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Monitoring - CloudWatch</p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Auditing - CloudTrail</p>

                          <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Hands On</p>
                          <div class="pad_l20">
                            <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Amazon SNS</p>
                              <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	CloudWatch</p>
                                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	CloudTrail</p>
</div>
              </div>
            </div>
          </div>


          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingThirteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseThirteen"><span class="number-count">13</span> Deployment, Analytics & Hybrid Services <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseThirteen" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>Elastic Beanstalk </p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	CloudFormation </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Kinesis </p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Elastic Map Reduce </p>
                        <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Hybrid Systems </p>

              </div>
            </div>
          </div>



          <div class="panel panel-default card wow fadeInUp animated">
            <div class="card-header" id="headingFourteen"> <a class="btn collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseFourteen"><span class="number-count">14</span> AWS Lambda <span class="plus-minus"><i class="fa fa-plus"></i></span> </a> </div>
            <div id="collapseFourteen" class="panel-collapse collapse">
              <div class="card-body">
                <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Introduction To Lambda </p>
                  <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>		Introduction To API Gateway </p>
                    <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Deploy Serverless Website </p>
                      <p class="d-flex"><i class="fa fa-angle-double-right" aria-hidden="true"></i>	Deploy Nodejs Lambda Function  </p>

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

export default Course
