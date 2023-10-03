import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { BsBrightnessHighFill, BsCheck2 } from "react-icons/bs";
import useDarkMode from "./useDarkMode.jsx";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { HiMoon } from "react-icons/hi2";
import Dropdown from "react-bootstrap/Dropdown";
import "../Css/Navbar.css";
import { images } from "../../constants";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const {
    isDarkMode,
    isAutoMode,
    toggleDarkMode,
    toggleAutoMode,
    changeMode,
  } = useDarkMode();
  const [isToggleOpen, setToggleOpen] = React.useState(false);
  const [toggle, setToggle] = useState(false);

  

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <Dropdown className="dropdown">
        <Dropdown.Toggle className="dd" variant="light" id="darkModeToggle">
          {isDarkMode ? <HiMoon className="icon" /> : null}
          {!isDarkMode && !isAutoMode ? (
            <BsBrightnessHighFill className="icon" />
          ) : null}
          {isAutoMode ? <WiMoonAltThirdQuarter className="icon" /> : null}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => changeMode("light")}
            className="dropdown-item"
          >
            <BsBrightnessHighFill className="icon" />
            <span className="dropdown-text">Light</span>
            {!isDarkMode && !isAutoMode && (
              <BsCheck2 className="checkmark" />
            )}{" "}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeMode("dark")}
            className="dropdown-item"
          >
            <HiMoon className="icon" />
            <span className="dropdown-text">Dark</span>
            {isDarkMode && !isAutoMode && (
              <BsCheck2 className="checkmark" />
            )}{" "}
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => changeMode("auto")}
            className="dropdown-item"
          >
            <WiMoonAltThirdQuarter className="icon" />
            <span className="dropdown-text">Auto</span>
            {isAutoMode && !isDarkMode && (
              <BsCheck2 className="checkmark" />
            )}{" "}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
