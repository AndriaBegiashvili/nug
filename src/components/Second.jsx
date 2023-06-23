import React from 'react'
import classes from "../modules/Second.module.css"
import Image from "../assets/imageMail.jpg"
import  Button  from '../UI/Button.jsx'

const Second = () => {
  return (
    <div className={classes.back} >
      <div className={classes.image_container}>
        <img className={classes.big_image} src={Image} />    
        </div>  
        <div className={classes.card_text}>
          <h1>Company’s First<br/> Service Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <Button/>
          </div>  
    </div>

  )
}

export default Second