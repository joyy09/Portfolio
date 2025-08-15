/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../styling/Project.css'
const PorjectSection = () => {
    return (
        <div>
            <div className='project-page'>
                <spam className='skill-heading' > My Recent Works </spam>
                <div className='skills-logo'>
                    <div className='flex'>
                        <div className="project" style={{ backgroundColor: '#0F0715', padding: '20px' }}>
                            <img src="project1.png" alt=""></img>
                            <div className='project-title'>
                                <div>
                                    <h3>Genus Industries</h3>
                                    <h5>Developed Training Management System</h5>
                                </div>
                                <a target="_blank" href='https://github.com/joyy09/Genus-Training-Management-System'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg></a>
                            </div>
                        </div>
                        <div className="project" style={{ backgroundColor: '#0F0715', padding: '20px' }}>
                            <img src="project2.png" alt=""></img>
                            <div className='project-title'>
                                <h3>Fexible Bandwidth Allocation</h3>
                                <a target="_blank" href='https://github.com/joyy09/Flexible-Bandwidth-Allocation'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorjectSection
