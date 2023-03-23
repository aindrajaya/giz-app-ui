import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes, AiOutlineBell } from "react-icons/fa";
import pena from '../../public/assets/pena.png'
import giz from '../../public/assets/giz.png'
import bell from '../../public/assets/SVG/icon_bell.svg'
import help from '../../public/assets/SVG/icon_help.svg'
import setting from '../../public/assets/SVG/icon_setting.svg'
import profile from '../../public/assets/SVG/icon_profile.svg'
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
            <Image
                    src={pena}
                    alt="Pena Logo"
                    width={50}
                />
            </Link>

            <div className={styles.shape}></div>

            <Link href="/" className={styles.logo}>
            <Image
                    src={giz}
                    alt="GIZ Logo"
                    width={50}
                    style={{paddingTop: '5px'}}
                />
            </Link>
        </div>

        <div className={styles.menuIcon} onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>


        <div className={styles.linkContainer}>
            <ul className={isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                    <Image
                        src={setting}
                        alt="My Image"
                        width={20}
                    />
                    </Link>
                </li> 
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                    <Image
                        src={help}
                        alt="My Image"
                        width={20}
                    />
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                    <Image
                        src={bell}
                        alt="My Image"
                        width={20}
                    />
                    </Link>
                </li>

                <div className={styles.shape}></div>
                
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                    <Image
                        src={profile}
                        alt="My Image"
                        width={20}
                    />
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
