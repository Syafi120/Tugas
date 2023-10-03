import React from 'react';
import './skills.css';
import UIDesign from '../../asset/experience.png';
import WebDesign from '../../asset/web design.png';
import AppDesign from '../../asset/design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate 2D Designer with experience in creating 2D visually appealing and user-friendly Website. i have a strong understanding of design and a keen eye for detail. I am proficient in ibis paint, and photoshop, as well as design software such as Adobe Illustrator</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Character Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Location Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App User Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills