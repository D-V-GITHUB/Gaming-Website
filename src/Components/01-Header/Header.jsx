import React, { useState, useEffect } from 'react'; 
import styles from './Header.module.css';
import NavBar from '../02-NavBar/NavBar';

function Header() {
    const [activeDot, setActiveDot] = useState('slide1');

    const handleDotClick = (dotId) => {
        setActiveDot(dotId);
    };

    useEffect(() => {
        const scrollNextImage = () => {
            const currentIndex = ['slide1', 'slide2', 'slide3'].indexOf(activeDot);
            const nextIndex = (currentIndex + 1) % 3;
            const nextSlideId = ['slide1', 'slide2', 'slide3'][nextIndex];
            document.getElementById(nextSlideId).scrollIntoView();
            setActiveDot(nextSlideId);
        };
    
        const scrollInterval = setInterval(scrollNextImage, 3000);

        return () => clearInterval(scrollInterval);
    }, [activeDot]);

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
