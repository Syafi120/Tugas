import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

// Clients
import opensea from '../../asset/opensea.png';
import adobe from '../../asset/adobe.png';
import facebook from '../../asset/facebook.png';
import microsoft from '../../asset/microsoft.png';

// Icon
import fbicon from '../../asset/fb.png';
import twitter from '../../asset/twitter.png';
import instagram from '../../asset/instagram.png';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dqsk8ez', 'template_1i4vpxa', form.current, 'am1DHF1zmmdU4ju_vIyZ9').then((result) =>{
            console.log(result.text);
            e.target.reset();
            alert('Email sent !');
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a driverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={opensea} alt='Client' className='clientImg'/>
                <img src={adobe} alt='Client' className='clientImg'/>
                <img src={facebook} alt='Client' className='clientImg'/>
                <img src={microsoft} alt='Client' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={fbicon} alt='Facebook' className='link'/>
                    <img src={twitter} alt='Twitter' className='link'/>
                    <img src={instagram} alt='Instagram' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact