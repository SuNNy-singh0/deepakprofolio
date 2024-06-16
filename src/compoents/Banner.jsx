import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Python Developer", "Java Developer", "Coder"], // Strings to display
      // Speed settings, try diffrent values untill you get good result
      startDelay: 300,
      typeSpeed: 75,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
    <div className='banner'>
        <div className='left'>
            <h3>Hi, I am</h3>
            <h1>Deepak Bhati</h1>
            <h2>I am <span ref={el}></span></h2>
            <p>A recent graduate  from Maharshi Dayanand University with a strong interest in software development, 
              particularly using Python and Java . During my studies, 
              I developed a solid foundation in programming concepts 
              and honed my skills in Java and Python. 
              I'm passionate about creating innovative solutions and I'm particularly drawn to the versatility and power of Java and Python for various development tasks.
                Whether it's building web applications, data analysis, or automation, I'm eager to learn and contribute my skills to a collaborative team environmenty</p>
           
           <div className='icon'>
            <a href='https://www.codechef.com/users/bhatideepak59/'><img  src='/images/codechef.png' className='demo'></img></a>
            <a href='bhatideepak599@gmail.com'><img src='/images/gmail.png'></img></a>
            <a href='https://www.linkedin.com/in/deepak-bhati-a3ba071b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '><img src='/images/linkedin.png'></img></a>
            <a href='https://www.geeksforgeeks.org/user/bhatideepak599/'><img src='/images/gfg.png' className='demo'></img></a>
           </div>
          
        </div>
        <div className='Right'>
           <img src='./images/21.png'></img>
        </div>
    </div>
    </>
  )
}

export default Banner