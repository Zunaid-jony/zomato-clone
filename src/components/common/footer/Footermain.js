import React from 'react';

import './Footermain.css'
import {BsFacebook}  from 'react-icons/bs';
import {BsLinkedin}  from 'react-icons/bs';
import {BsGithub}  from 'react-icons/bs';


const Footermain = () => {
    return (
        <div className="footer-a" mb-1 style={{ marginBottom:'1%'}}>
          
        <div
       
        
          className="bg-dark text-white pt-5 pb-4  "
          style={{ backgroundColor: "rgb(29, 27, 24)" }}
        >
          <div
          
            className="container text-center text-md-left"
            style={{ textAlign: "left" }}
          >
            <div className="row text-center text-md-left">
              <div className="col-md-3 clo-lg-3 col-xl-3 mx-auto  mt-3 align-itmes-left texts">
                <h5 className="text-uppercase mb-4 font-weight-bold text-light ">
                  {" "}
                  {/* footer logo */}
                  <img style={{width:'110px',marginTop:'-17px'}}
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Zomato_Logo.png"
                        alt="Zomato-logo"
                        // className="header-logo"
                    />
                   </h5>
                  <p>     
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry{" "}
                </p>
                <p>
                  Lorem Ipsum is simply dummy Lorem Ipsum has been the industry{" "}
                </p>
              </div>
  
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 texts">
                <h5 className="text-uppercase mb-4 font-weight-bold text-light">
                  {" "}
                  CONTACT US
                </h5>
                <p> 1244, Dhanmondi, Bangladash </p>
                <p> +0162 7392810, +0177 9608956 </p>
                <p> md.jony.soft@gmail.com, jony35-260@diu.edu.bd</p>
                <p> md.jony.soft@gmail.com </p>
              </div>
  
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 texts ">
                <h5 className="text-uppercase mb-4 font-weight-bold text-light ">
                  MY ACCOUNT
                </h5>
                <p>MY Account</p>
                <p> Wishist</p>
                <p> Shopping Cart</p>
                <p> Copare</p>
              </div>
  
              <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 texts">
                <h5 className="text-uppercase mb-4 font-weight-bold text-light">
                  {" "}
                  SIGN UP FOR NEWSLETTER
                </h5>
              
                <h6> FOLLOW US ON</h6>
              
                <p style={{fontSize:'26px',color:'#2239e5' }}> <BsFacebook ></BsFacebook>&nbsp; &nbsp; 
                 <BsLinkedin></BsLinkedin> &nbsp;
                 <BsGithub></BsGithub>
                 {/* npm run build  */}
                 
                 
                 
                 </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footermain;