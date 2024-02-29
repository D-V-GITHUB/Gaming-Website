import React, { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState('');

  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredItem('');
  };

  let animationStyle = styles.animation;

  if (isHovered && hoveredItem === 'home') {
    animationStyle = `${styles.animation} ${styles.hovered1}`;
  } else if (isHovered && hoveredItem === 'projects') {
    animationStyle = `${styles.animation} ${styles.hovered2}`;
  } else if (isHovered && hoveredItem === 'about') {
    animationStyle = `${styles.animation} ${styles.hovered3}`;
  } else if (isHovered && hoveredItem === 'contact') {
    animationStyle = `${styles.animation} ${styles.hovered4}`;
  }

  return (
    <div className={styles.div1}>
      <nav>
        <a href='#' onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>Home</a>
        <a href='#' onMouseEnter={() => handleMouseEnter('projects')} onMouseLeave={handleMouseLeave}>Projects</a>
        <a href='#' onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>About</a>
        <a href='#' onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>Contact</a>
        <div className={animationStyle} />
      </nav>
    </div>
  );
}

export default NavBar;