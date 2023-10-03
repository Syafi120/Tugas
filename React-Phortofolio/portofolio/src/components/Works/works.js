import React from 'react';
import './works.css';
import porto1 from '../../asset/1.jpeg';
import porto2 from '../../asset/2.jpeg';
import porto3 from '../../asset/3.jpeg';
import porto4 from '../../asset/4.jpeg';
import porto5 from '../../asset/5.jpeg';
import porto6 from '../../asset/6.jpeg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My portofolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</span>
        <div className='worksImgs'>
            <img src={porto1} alt='' className='worksImg'/>
            <img src={porto2} alt='' className='worksImg'/>
            <img src={porto3} alt='' className='worksImg'/>
            <img src={porto4} alt='' className='worksImg'/>
            <img src={porto5} alt='' className='worksImg'/>
            <img src={porto6} alt='' className='worksImg'/>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works