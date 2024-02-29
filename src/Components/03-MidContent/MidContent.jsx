import React, { useState } from 'react';
import styles from './MidContent.module.css';

function MidContent(){

    return(
        <>
            <div className={styles.div4}>
                <h1>Projects</h1>
                <p className={styles.pp}>As a seasoned creator of contemporary.<br></br>
                    user-friendly web designs and digital<br></br>
                    solutions, I aim to assist you in constructing<br></br>
                    the brand of your fantasies.
                </p>
            </div>
            <div className={styles.gridcontainer}>
                <img className={styles.imggrid} src="./Card 1.png" alt="Card 1" />
                <img className={styles.imggrid} src="./Card 2.png" alt="Card 2" />
                <h3>Crtly</h3>
                <h3>Tanasto</h3>
                <p className={styles.ppp}>Mobile App</p>
                <p className={styles.ppp}>Web Design</p>
            </div>
            <div className={styles.gridcontainer2}>
                <img className={styles.imggrid} src="./Card 3.png" alt="Card 3" />
                <img className={styles.imggrid} src="./Card 4.png" alt="Card 4" />
                <h3>Senta</h3>
                <h3>Crint</h3>
                <p className={styles.ppp}>Mobile App & Branding</p>
                <p className={styles.ppp}>Mobile App</p>
            </div>
        </>
    );
}

export default MidContent;