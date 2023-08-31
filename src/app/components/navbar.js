"use client";
import React, {useState} from "react";
import styles from './navbar.module.css';

function Navbar() {
    const [selectedItem, setSelectedItem]=useState('Inicio');

    const handleItemClick=(item)=> {

    };

    return(
        <nav className={styles.Navbar}>
         <div className={styles.NavbarItem + ` ${selectedItem === 'Inicio' ? styles.selected: ''}`}
         onClick={() => handleItemClick('Inicio')}
         >
            <a href="#header">Inicio</a>
         </div>
         <div className={styles.NavbarItem + ` ${selectedItem === 'Skills' ? styles.selected:''}`}
         onClick={() => handleItemClick('Skills')}
         >
            <a href="#info">Skills</a>
         </div>
        </nav>
    );
}

export default Navbar;
