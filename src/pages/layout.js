import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import {
    layoutContainer,
    layoutHeading,
    layoutNavItems,
    layoutNavLinkItem,
    layoutNavNormalItem,
    layoutNavLinkText,
    layoutBodyBlock
} from './css/layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={layoutContainer}>
            <nav className={layoutHeading}>
                <StaticImage className={layoutNavNormalItem} alt="EldritchBeautyLogo" src="../images/EldritchLogoPlaceholder.png" layout="fixed" />
                <ul className={layoutNavItems}>
                    <li className={layoutNavLinkItem}>
                        <Link to="/" className={layoutNavLinkText}>Home</Link>
                    </li>
                    <li className={layoutNavLinkItem}>
                        <Link to="/resume" className={layoutNavLinkText}>Resume</Link>
                    </li>
                    <li className={layoutNavLinkItem}>
                        <Link to="/contact" className={layoutNavLinkText}>Contact</Link>
                    </li>
                    <li className={layoutNavLinkItem}>
                        <Link to="/projects" className={layoutNavLinkText}>Projects</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <div className={layoutBodyBlock}>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout
