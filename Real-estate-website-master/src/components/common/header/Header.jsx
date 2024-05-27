import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo3.jpg" alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*Each li element is given a key prop, which is necessary for React to efficiently update and manage lists. The key prop here is set to index*/}
          {/* <div className='button flex'>
           
            <button Link to="/signup" className='btn1' > 
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div> */}
            {/* Other header content */}
            <div className="button flex">
             <Link to="/signup" className="btn1">
                <i className="fa fa-sign-out"></i> Sign In
              </Link>
            </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
