/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import '../styling/About.css'
import './Header'
import Header from './Header'
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {
  return (
    <>
      <div className="about-background"><span className="hi">HI</span></div>
      <div className="about-container">
        <div className='about-text'>
          <div className='about' style={{color:'#8750f7'}}>Welcome to my world</div>
          <div className="name">Hi, I'm Aditi Bajaj</div>
          <TypeAnimation className='work' sequence={[
            'a Web Developer.', 1000,
            'a Software Engineer.', 1000
          ]} wrapper="div" speed={150} repeat={Infinity} />
          <div className="about">I am a pre-final year undergrad student at LNMIIT, pursuing my B.Tech degree in Electronics ans Communication Engineering (ECE) with an overall CGPA of 8.1.</div>
          <div className="about">I am a software engineering enthusiast who is actively pursuing expertise in the MERN stack. Additionally, I am dedicated to sharpening my skills in DSA and problem-solving techniques, which are crucial aspects of my professional journey.</div>

          <div className='div-social'>

            <a className='social-container' target="_blank" href='https://github.com/bajaj09' ><svg xmlns="http://www.w3.org/2000/svg" height='30' width='30' fill="#8750F7" className="bi bi-github social" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg></a>

            <a className='social-container' target="_blank" href='https://www.linkedin.com/in/aditi-bajaj-766b01287'><svg xmlns="http://www.w3.org/2000/svg" height='30' width='30' fill="#8750F7" class="bi bi-linkedin social " viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg></a>

            <a className='social-container' target="_blank" href='https://leetcode.com/u/nvm09/' xmlns="http://www.w3.org/2000/svg"><svg className='social' fill="#8750F7"  height='30' width='30' enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg></a>

            <a className='social-container' target="_blank" href='https://codeforces.com/profile/euphoria09'><svg className='social' fill="#8750F7"   xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="code-forces"><path d="M24 19.5V12c0-.828-.672-1.5-1.5-1.5h-3c-.828 0-1.5.672-1.5 1.5v7.5c0 .828.672 1.5 1.5 1.5h3C23.328 21 24 20.328 24 19.5zM13.5 21c.828 0 1.5-.672 1.5-1.5v-15C15 3.672 14.328 3 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5H13.5zM0 19.5C0 20.328.673 21 1.5 21h3C5.328 21 6 20.328 6 19.5V9c0-.828-.672-1.5-1.5-1.5h-3C.673 7.5 0 8.172 0 9V19.5z"></path></svg></a>
          </div>

          <div className='div-social'>
            <svg xmlns="http://www.w3.org/2000/svg" weight='25' width='25' fill="#8750F7" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg> aditibajaj0910@gmail.com
          </div>
        </div>
        <div className="pic"><img src="myself.jpg" alt="" /></div>
      </div>
    </>
  )
}

export default AboutSection
