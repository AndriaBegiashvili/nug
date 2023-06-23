import React from 'react'
import classes from '../modules/Services.module.css'
import Service1 from '../assets/service1.png'
import Service2 from '../assets/service2.png'
import Service3 from '../assets/service3.png'

const Services = () => {
  return (
    <>
    
    
    <div className={classes.main_container}>
      <h2>Services</h2>
      </div>
      <div className={classes.cent}>
        <div className={classes.container}>
            <div className={classes.cont}>
            <img src={Service1} className={classes.service_image}></img>
            <h3>Service name</h3>
            </div>
            <div className={classes.cont}>
            <img src={Service2} className={classes.service_image}></img>
            <h3>Service name</h3>
            </div>
            <div className={classes.cont}>
            <img src={Service3} className={classes.service_image}></img>
            <h3>Service name</h3>
            </div>
        </div>
        </div>
     </>
  )
}

export default Services