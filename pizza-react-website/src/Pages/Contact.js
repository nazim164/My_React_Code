import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg'
import '../style/Contact.css'
function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${pizzaLeft})`}}></div>
            <div className="rightSide">
                <h1>CONTACT US</h1>
                <form id="contact-form"method="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter Full Name..."/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email..."/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter Maseeage..."name="message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
