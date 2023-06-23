import React from 'react'
import Image from "../assets/about.png"
import classes from '../modules/About.module.css'
import RedButton from '../UI/RedButton'

const About = () => {
  return (
    <div className={classes.container}>
        <img src={Image}></img>
        <div className={classes.column}>
            <h3>About Company</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.
                 Ut enim ad minim veniam, quis nostrud<br/> exercitation ullamco laboris nisi 
                 ut aliquip ex ea commodo<br/> consequat. Duis aute irure dolor in reprehenderit 
                 in<br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                 Excepteur sint occaecat cupidatat non proident, 
                sunt in<br/> culpa qui officia deserunt mollit anim id est laborum.</p>
                <RedButton/>
        </div>
    </div>
  )
}

export default About