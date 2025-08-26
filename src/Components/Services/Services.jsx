import React from 'react'
import './Services.css'
import logo from '../../Assets/logo.jpg'
import Services_data from '../../assets/services_data'
import Arrow from'../../assets/Arrow-icon.jpg';


const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Skills</h1>
        {/* <img src={logo} alt="" /> */}
      </div>
        <div className="services-container">
            {Services_data.map((service,index)=>{
                return <div key={index} className='services-format'>
                   <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                    <p>Read More</p>
                    <img src={Arrow} alt="" height={20}/>

                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services