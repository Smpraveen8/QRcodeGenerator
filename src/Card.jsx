import React from 'react'

function User(){
  return(
    <div className='card-container'>
    <span className='pro'>ONLINE</span>
    <img src='pic.jpg' className='image' width= "100" height="100" alt='user'></img>
    <h3 className='name'>Praveen SM</h3>
    <h3 className='dept'>Electronics and Communication Engineering</h3>
    <p>Full Stack Developer</p>
    <div className='button'>
      <button className='primary'>Message</button>
      <button className='primary outline'>Following</button>
    </div>
    <div className='skills'>
      <h6 className='sk'>Skills</h6>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
         <li>Java</li>
         <li>Python</li>
         <li>Mysql</li>
         <li>Oracle</li>
      </ul>
    </div>
    </div>
  )
      
}

export const Card = () => {
  return ( <User />
  )
}
