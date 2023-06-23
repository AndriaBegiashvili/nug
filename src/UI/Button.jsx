import React from 'react'
import Image from '../assets/Vector.png'
import classes from '../modules/Button.module.css'

const Button = () => {
  return (
    <>
    <button className={classes.arrow_button}>See more<span className={classes.arrow}><img src={Image}></img></span>
    </button>
    </>
  )
}

export default Button