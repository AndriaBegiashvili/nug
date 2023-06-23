import React from 'react'
import classes from '../modules/RedButton.module.css'
import Image from '../assets/redArrow.png'

const RedButton= () => {
  return (
    <>
    <button className={classes.arrow_button}>See more<span className={classes.arrow}><img src={Image}></img></span>
    </button>
    </>
  )
}

export default RedButton
