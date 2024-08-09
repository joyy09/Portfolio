/* eslint-disable no-unused-vars */
import React from 'react'
import '../styling/Project.css'
const PorjectSection = () => {
  return (
    <div>
        <div className='project-page'>
            <spam className='skill-heading' > My Recent Works </spam>
            <div className='skills-logo'>
            <div>
                <div className="project" style={{backgroundColor:'#0F0715',padding:'20px'}}>
                    
                    <img src="project1.png" alt=""></img>
                    <div className='project-title'>
                        <h3>Genus Industries</h3>
                        <h5>Developed Training Management System</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PorjectSection
