import '../styling/Education.css'
const EducationSection = () => {
  return (
    <div className='skill-page'>
            <div className="eduwork">
                <div className="edu">
                    <span className='skill-heading'> My Education </span>
                    <div className="edu-container">
                        <div className='year'>2022-2026</div>
                        <div className='title'>B.TECH in ECE ( CGPA: 8.55 )</div>
                        <div className='company'>The LNM Institute of Information Technology</div>
                    </div>
                    <div className="edu-container">
                        <div  className='year'>2022</div>
                        <div className='title'>12th STANDARD ( 96.4% )</div>
                        <div className='company'>{`MGD Girls' School, Jaipur`}</div>
                    </div>
                    <div className="edu-container">
                        <div  className='year'>2020</div>
                        <div className='title'>10th STANDARD ( 93.4% )</div>
                        <div className='company'>{`MGD Girls' School, Jaipur`}</div>
                    </div>
                </div>
                <div className="edu">
                    <spam className='skill-heading'> My Experience </spam>
                    <div className="edu-container">
                        <div className='year'>May 2025- July 2025</div>
                        <div className='title'>SWE INTERN</div>
                        <div className='company'>Microsoft India (R&D) Pvt. Ltd. </div>
                    </div>
                    <div className="edu-container">
                        <div className='year'>July 2024- Aug 2024</div>
                        <div className='title'>SDE INTERN</div>
                        <div className='company'>Genus Power Infrastructures </div>
                    </div>
                    <div className="edu-container">
                        <div  className='year'>Jan 2024- April 2024</div>
                        <div className='title'>TEACHING ASSISTANT </div>
                        <div className='company'>The LNM Institute of Information Technology</div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default EducationSection
