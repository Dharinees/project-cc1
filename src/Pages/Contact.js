import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../App.css";
function Contact() {
  return (
   <section id='contact'>
     <div className="cont ">
      <h1 style={{textAlign:'center',color:'white',fontSize:'3em',fontWeight:'700'}}>Contact</h1>
     <div className='contact'>
     <div className='div1'>
       <p>Email : 727721euec022@gmail.com</p>
       <p>Phone : +91 8960077453</p>
       <p>address : skcet,coimbatore</p>
    </div>
    <div className='div2'>
    <p><u>Useful Links</u></p>
    <p>quotes</p>
    <p>home</p>
    <p>contact</p>
    </div>
    <div className='div3'>
    <p><u>Our goals</u></p>
    <p>Generate Random quotes</p>
    <p>Select by categories</p>
    <p>Advanced</p>
    </div>
     </div>
      <div className="container23    mx-auto flex justify-center bottom-0 left-0 right-0 mb-6">
      
      </div>
    </div>
   </section>
  );
}

export default Contact;
