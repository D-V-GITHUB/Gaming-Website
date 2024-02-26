import React, { useEffect } from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div className={styles.container1}>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
    
    
      <div className={styles.container2}>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
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
