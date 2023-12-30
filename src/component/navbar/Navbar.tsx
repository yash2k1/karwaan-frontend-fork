"use client"
import { useState } from 'react';
import styles from './Navbar.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { MenuItems } from "@/constants/MenuItems";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    return (
        <>
            <nav className={styles.navbar} style={(pathname === "/" || pathname === "/contact" || pathname === "/user") ? { backgroundColor: "transparent" } : { backgroundColor: "white" }}>

                {/* <div className={`${styles.contact} ${styles.uppercase} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : (pathname === "/contact" || pathname === "/user") ? { visibility: "hidden", pointerEvents: "none" } : { color: "black" }}>Contact us</div> */}
                <div className={`${styles.logoDiv} ${styles.hover}`}>
                        <a onClick={() => router.push("/")} style={pathname === "/" ? { color: "white" } :pathname==="/contact"? { display: "none" }:{ filter: " invert(100%) sepia(100%) saturate(0%) hue-rotate(71deg) brightness(104%) contrast(104%)" }} >
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className={styles.logoImage} />
                        </a>
                    </div>
                {/* if menu is close than this  */}
                {!isMenuOpen && <div className={styles.rightNav}>
                    {/* <div className={`${styles.logoDiv}${styles.hover}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(true);
                        }}>
                        <a onClick={() => router.push("/")} style={pathname === "/" ? { color: "white" } : { display: "none" }} >
                            <img src="https://karwaan.b-cdn.net/Front/KARWAANLOGOWHITE%20(Custom).png" className={styles.logoImage} />
                        </a>
                    </div> */}
                    <div className={`${styles.closeMenu} ${styles.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            // changeHomeTheme(true);
                        }}>
                        <div className={`${styles.menu} ${styles.uppercase} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : { color: "black" }}>menu </div>
                        <MenuRoundedIcon className={`${styles.menuIcon} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : { color: "black" }} />
                    </div>
                    <div className={styles.user} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} style={pathname === "/" ? { color: "white" } : { color: "black" }} >user
                        <AccountCircleOutlinedIcon className={styles.userLogo} style={pathname === "/" ? { color: "white !important" } : { color: "black !important" }}  />
                    </div>

                </div>}
                {/* if menu is open */}
                {isMenuOpen && <div className={styles.rightNav}>

                    <div className={`${styles.openMenu} ${styles.uppercase}`}
                        onClick=
                        {() => {
                            setIsMenuOpen(!isMenuOpen);
                            //  changeHomeTheme(false);
                        }}>

                        <ul className={`${styles.menuOptions} ${styles.capitalize}`}>
                            {MenuItems.map((menuItem) => {
                            
                                return (<>
                                    <li style={pathname === menuItem.route ? { color: "white", pointerEvents: "none" } : { color: "gray" }}
                                        className={styles.menuItem} onClick={() => { router.push(menuItem.route) }}>{menuItem.text}</li>
                                    <li className={`${styles.forwardSlash}`}  >/</li>
                                </>
                                )
                            })}

                        </ul>
                        <CloseOutlinedIcon className={`${styles.crossIcon} ${styles.hover}`} style={pathname === "/" ? { color: "white" } : { color: "black" }} />
                    </div>

                </div>}
            </nav>
            <div style={isUserMenuOpen ? { display: "flex" } : { display: 'none' }} className={styles.userSetting}>
                <div className={styles.userSettingCross} ><CloseOutlinedIcon className={styles.userSettingClose} onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} /> <span> User Setting</span></div>
                <ul className={styles.userSettingOptions}>
                    <li className={styles.userSettingSignUp} onClick={()=>{router.push("/signup");setIsUserMenuOpen(!isUserMenuOpen)}}>Sign Up</li>
                    <li className={styles.userSettingSignIn} onClick={()=>{router.push("/signin");setIsUserMenuOpen(!isUserMenuOpen)}}>Sign In</li>
                    <li className={styles.userSettingUpdateInfo}>cart</li>
                    <li className={styles.userSettingUpdateInfo}>Profile</li>
                    <li className={styles.userSettingUpdatePassword}>Update Password</li>
                    <li className={styles.userSettingUpdateInfo}>settings</li>
                    <li className={styles.userSettingLogOut}>Log Out</li>
                </ul>
            </div>
        </>
    )
}


