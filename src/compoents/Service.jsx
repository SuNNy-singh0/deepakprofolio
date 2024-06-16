import React from 'react'

function Service() {
  const openUrl = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div id='maincontainer'>
        <h1 className='head'>Projects</h1>
        <div className='project'>
          <div className='pro1'>
            <h3>Facial Attendence System</h3>
            <h4>Skill:- Python , OpenCv, Haar Cascades, Numpy, MySql</h4>
            <p>To develop a Facial Attendance System that automates the attendance process upto 90% using facial recognition technology.
              <br></br> • It can be used in multiple departments across industries and can reduce paper-based attendance recordkeeping by up to 100% .
              <br></br>• The accuracy rate of attendance marking is more than 85%.
              <br></br>• It can save up to 70% of time compared to manual attendance markingUsers don’t need to carry cards or remember PINs, making
              the process quick and hassle-free.
            </p>
            <button className='btn3' onClick={() => openUrl('https://github.com/bhatideepak599/Facial_Attendence_System')}>See it</button>
          </div>
          <div className='pro1'>
            <h3>Coaching Helper</h3>
            <h4>Skill:- HTML ,CSS , JS , AJAX , PHP , MYSQL</h4>
            <p>Developed and deployed a user-friendly web application utilizing geolocation and user preferences, facilitating effortless discovery
              of local coaching centers increased user engagement by 40% and drove a 25% increase in coaching center registrations.
             <br></br> • Students can get refund of their fees upto 95 % through legal process ,if information claimed by institute is false within certain period
              of time .
             <br></br> • Students can access 100% authentic reviews from verified past attendees, aiding them in making informed decisions without falling
              victim to false promises or deceptive marketing tactics often encountered in coaching centers.</p>
            <button className='btn3' onClick={() => openUrl('https://github.com/bhatideepak599/coachingfinder')}>See it</button>
          </div>
          {/* <div className='pro1'>
            <h3>Online Examination System</h3>
            <h4>Skill:- HTMl, CSS, ReactJs , Spring MVC, Oracle DB</h4>
            <p>In this Project Student Give MCQ Based Exam and Set his Score as per performance.
              Teacher & Admin Can Create the Exam , Update the Exam & Schedule the time When Exam Start.
              Project Implement Concepts like Authorization & Authentication , Encapsulation.</p>
            <button className='btn3' onClick={() => openUrl('https://sunny-singh0.github.io/numerology/')}>See it</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Service