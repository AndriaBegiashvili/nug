import React from "react";
import Logo from "../assets/logo.svg";
import classes from "../modules/Navbar.module.css";
import Search from "../assets/search.png";

const Navbar = () => {
  return (
    <>
      <header className={classes.container}>
        <div
          className={`${classes.row}  ${classes.space_between} ${classes.align_center}`}
        >
          <div>
            <img src={Logo} />
          </div>
          <nav>
            <ul className={classes.nav_link}>
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className={classes.btn_container}>
            <div className={classes.inp}>
              <div className={classes.inputWrapper}>
                <input
                  placeholder="search keyword ..."
                  className={classes.search}
                />
                <a>
                <img
                  className={classes.inputIcon}
                  src={Search}
                  alt="Search Icon"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
