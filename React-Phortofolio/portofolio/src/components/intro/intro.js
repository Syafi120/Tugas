import React from 'react';
import './intro.css';
import bg from '../../asset/Person-PNG-Clipart-removebg-preview.png';
import {Link} from 'react-scroll';
import btnImg from '../../asset/990853036-hire_me-removebg-preview.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
                I'm <span className='introName'>
                        Nick <br/> 2D Designer
                    </span>
            </span>
            <p className='introPara'>I am a Skilled 2D designer with experience in creating <br/> 2D visually appealing and user Friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro