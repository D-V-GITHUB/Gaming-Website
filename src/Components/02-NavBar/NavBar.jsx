import styles from './NavBar.module.css';
import React, { useState, useEffect } from 'react';


function NavBar() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(userAgent.match(/mobile/i));
    console.log(isMobile);
    return () => {
      setIsMobile(false);
    };
  },[]);

  
  return (
    <>
      <div className={styles.container1}>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
    
    
      <div className={styles.container2}>
        <img className={styles.logo} src="./images/logo.png" alt="Logo" />
        <nav className={isMobile ? styles.containerMobile : styles.containerDesktop}>
          <a href='#'>Home</a>
          <a href='#'>About</a>
            <ul className={styles.dropdown1}>
                <li><a href='#'>About</a></li>
                <li><a href='#'>About Alternative</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Career</a></li>
              </ul>
          <a href='#'>Games</a>
          <a href='#'>Blog</a>
          <a href='#'>Community</a>
          <a href='#'>esports</a>
          <a href='#'>Pages</a>
          <a href='#'>Contact</a>
        </nav>
        
      </div>

      
     
    </>
  );
}

export default NavBar;
