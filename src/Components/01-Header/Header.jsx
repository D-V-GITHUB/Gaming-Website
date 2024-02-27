import React, { useState, useEffect } from 'react'; 
import styles from './Header.module.css';
import NavBar from '../02-NavBar/NavBar';

function Header() {
    const [activeDot, setActiveDot] = useState(null);

    const handleDotClick = (dotId) => {
        setActiveDot(dotId);
    };

    useEffect(() => {
        // Function to scroll to the next image after 2 seconds
        const scrollNextImage = () => {
            // Get the current active dot index
            const currentIndex = ['slide1', 'slide2', 'slide3'].indexOf(activeDot);
            // Calculate the index of the next dot (circular)
            const nextIndex = (currentIndex + 1) % 3;
            // Get the ID of the next slide
            const nextSlideId = ['slide1', 'slide2', 'slide3'][nextIndex];
            // Scroll to the next slide
            document.getElementById(nextSlideId).scrollIntoView({ behavior: 'smooth' });
            // Set the next dot as active
            setActiveDot(nextSlideId);
        };

        // Scroll to the next image every 2 seconds
        const scrollInterval = setInterval(scrollNextImage, 3000);

        // Clean up the interval on component unmount
        return () => clearInterval(scrollInterval);
    }, [activeDot]); // Trigger effect when activeDot changes

    return (
        <>
            <NavBar />
            <div className={styles.slider}>
                <div className={styles.images}>
                    <img id="slide1" src="./images/slide1.jpg" alt="slide1" />
                    <img id="slide2" src="./images/slide2.jpg" alt="slide2" />
                    <img id="slide3" src="./images/slide3.jpg" alt="slide3" />
                </div>
                <div className={styles.navigationdots}>
                    <a href="#slide1" className={`${styles.dot} ${activeDot === 'slide1' ? styles.active : ''}`} onClick={() => handleDotClick('slide1')}></a>
                    <a href="#slide2" className={`${styles.dot} ${activeDot === 'slide2' ? styles.active : ''}`} onClick={() => handleDotClick('slide2')}></a>
                    <a href="#slide3" className={`${styles.dot} ${activeDot === 'slide3' ? styles.active : ''}`} onClick={() => handleDotClick('slide3')}></a>
                </div>
            </div>
        </>
    );
}

export default Header;
