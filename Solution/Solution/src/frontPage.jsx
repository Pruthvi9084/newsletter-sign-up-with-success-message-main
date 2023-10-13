import React from 'react'
import imgUrl from './illustration-sign-up-desktop.png'
import { useNavigate } from 'react-router-dom';
import { useRef,useState,useEffect } from 'react';
import axios from 'axios';
import './frontPage.css'




const Frontpage = () => 
{
  const navigate = useNavigate();
  const emailInputRef = useRef(null)
  const [newEmail,setNewEmail] = useState('')
  const [emails,setEmails] = useState([])

  useEffect (()=>{
    axios.get('http://localhost:3001/emails')
    .then(response=>{
      setEmails(emails.concat(response.data))
    })
  },[])

  const validateEmail = (event)=> {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        addEmail(email)
        handleSubscribeClick(email)
    } else {
        alert('Please enter a valid email address.');
    }
  }

  
  const addEmail = (email) => {
    // Convert email to lowercase for case-insensitive comparison
    const lowercaseEmail = email.toLowerCase();
  
    // Check if the email already exists
    const existingEmail = emails.find((emailObj) => emailObj.email.toLowerCase() === lowercaseEmail);
  
    if (existingEmail) {
      alert(`${email} already exists`);
    } else {
      const mailObject = {
        email: email,
      };
  
      axios.post('http://localhost:3001/emails', mailObject)
        .then(response => {
          setEmails([...emails, response.data]);
          setNewEmail('');
          console.log(`Email is posted: ${response.data}`);
        })
        .catch(error => {
          console.error('Error posting email:', error);
        });
    }
  };

  const handleEmailChange = (event) =>
  {
    console.log(event.target.value)
    setNewEmail(event.target.value)
  }
  const handleSubscribeClick = (newEmail) => 
  {
    navigate(`/secondpage/${encodeURIComponent(newEmail)}`);
  };

  return (
    <div className='body'>
      <div className='border'>
        <div className='left'>
          <h1>Stay updated!</h1>
          <p className='top-para'>Join 60,000+ product managers receiving monthly <br/>updates on:</p>
            <div className='para'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g>
              </svg>
              <p>Product discovery and building what matters</p>
            </div>

            <div className='para'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g>
              </svg>
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className='para'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g>
              </svg>
              <p>And much more!</p>
            </div>
            <div className='email'>
              <h5>Email address</h5>
              <form onSubmit={validateEmail}>
                <input type='email' value = {newEmail} onChange = {handleEmailChange} className='email-box' ref = {emailInputRef}></input>
                <button type='submit'>Subscribe to monthly newsletter</button>
              </form>
            </div>
        </div>

        <div className='right'>
          <img src= {imgUrl} alt='Svg image' />
        </div>

      </div>
    </div>
  )
}

export default Frontpage
