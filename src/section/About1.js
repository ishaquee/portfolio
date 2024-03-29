import React from 'react'
import './About1.css'
import { Link } from 'react-router-dom';
import {BsInstagram,BsFacebook,BsTwitter,BsGithub} from 'react-icons/bs'
function About1() {
  return (

    <div className='abt1'>  
  <div className='center1'>
  <div className='bbt'>
   <div className='image1 center'>
  <img src='https://res.cloudinary.com/instaclone2022/image/upload/v1656444977/portfolio/WhatsApp_Image_2022-06-02_at_12.36.46_PM_dxrur3-removebg-preview_apmshf.png' />
   </div>
   <h3 style={{fontWeight:'bold'}} className='center name1' > Mohamed Ishaque </h3>
   <p className='center role ' style={{fontWeight:'900'}}>Full Stack Developer </p>
   <div className='socail-media'>
     <div className="icons" style={{color:'darkred'}}> 
     <BsInstagram/>
       </div>
     <div className="icons"  style={{color:'darkblue'}}> <BsFacebook/> </div>
     <div className="icons"style={{color:'#00acee'}} > <BsTwitter/> </div>
     <div className="icons"> <BsGithub/>  </div>
   </div>
   <p className='center bio'>Secure a responsible career opportunity to fully utilise my training and skills while making a significant contribution to the success of the company.</p>

   </div>
   
  </div>
     
        <div className='story'>
            <h2 className='center head'> To cut a long story short, </h2>
            {/* <p className='notes'>I am a Final-year engineering student at Karpgam college of Engineering, Coimbatore, currently undertaking my Bachelor in Computer Science Engineering.</p> */}
            <p className='notes'>I'm a tech enthusiast with experience in building full-stack web applications, Creative full stack developer with a strong history of project management and building applications.</p>
        </div>

        <div className='story'>
            <h2 className='center head'> Achievements </h2>
            <p className='notes'>Partcipated In Smart India Hackathon-2020 <img src='https://lh3.googleusercontent.com/jOOCxt0YRNlAEmJ4In1roEjEyjisdGakTGTzPzxdjB8KtpIU4VIUVxVNshcjqRUGejQ' width='40px' height='40px'  /> </p>
            <p className='notes'>Completed Google Cloud Facilator Program at 2021 <img src='https://res.cloudinary.com/instaclone2022/image/upload/v1662287629/portfolio/google-cloud-logo-ADE788217F-seeklogo.com_djczab.png' width='30px' height='30px' /> </p>
        </div>
        {/* <div className='story'>
        <Link to='/resume'  style={{ textDecoration: 'none'}} className='ht'>     <h6 className='center goto' style={{border:'2px solid black',width:'max-content'}}>  Get to know more about me </h6> </Link>
        </div> */}
   
    
    </div>

  )
}

export default About1