import React from "react";
import classes from "../modules/Footer.module.css";
import Logo from "../assets/footLogo.png";
import Socials from '../assets/insta.png'
import SendButton  from "../UI/SendButton";

const Footer = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.container}>
          <div className={classes.col}>
            <img src={Logo}></img>
            <p>© 2023 All Rights Reserved</p>
          </div>
          <div className={classes.col2}>
          <nav>
            <ul className={classes.nav_link}>
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <img src={Socials} className={classes.socials}/>
          </div>
          
          <div class={classes.grid_cont}>
            <input type="text" placeholder="Name" className={classes.small_input}/>
            <input type="text" placeholder="Email" className={classes.small_input}/>        

            <textarea
              type="text"
              placeholder="Text"
              className={classes.combined_input}
            />
            <SendButton/>
 
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
