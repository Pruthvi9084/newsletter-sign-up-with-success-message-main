import React from "react"
import './SecondPage.css';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const SecondPage = () =>{
    const navigate = useNavigate();
    const { email } = useParams();

    const handleSubscribeClick = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      navigate('/');
    };
    return(
        <div className="body">
            <div className="thanks">
                <div className="tick">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                        <g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
                        <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g>
                    </svg>
                    <h2 className="text-1">Thanks for subscribing!</h2>
                    <p>A confirmation mail has been sent to <strong>{email}</strong>.Please open it and click
                    the button inside to confirm your subscription. </p>
                    <button className="button" onClick={handleSubscribeClick}>Dismiss message</button>
                </div>

            </div>
            
        </div>
    )
}

export default SecondPage