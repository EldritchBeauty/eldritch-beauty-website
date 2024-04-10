import * as React from "react"
import Layout from "./layout"
import { StaticImage } from 'gatsby-plugin-image'

import {
    indexContainer,
    indexItem,
    indexItemImageTop, 
    indexItemMiddle,
    indexItemBottom
} from './css/layout.module.css'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Applications</h1>
            <div className={indexContainer}>
                <div className={indexItem}>
                    <div className={indexItemImageTop} >
                        <StaticImage alt="GatsbyLogo" src="../images/icon.png" layout="fixed" />
                    </div>
                    <div className={indexItemMiddle}><a target="_blank" href="https://github.com/EldritchBeauty/eldritch-beauty-website">This Website</a></div>
                    <p className={indexItemBottom}>Developed with Gatsby, REACT, CSS and HTML. Hosted with netlify.</p>
                </div>
                <div className={indexItem}>
                    <StaticImage className={indexItemImageTop} alt="JeoperdyExampleImage" src="../images/JeoperdyExample.png" layout="fixed" />
                    <div className={indexItemMiddle}><a target="__blank" href="https://github.com/EldritchBeauty/Jeoperdy">Jeoperdy</a></div>
                    <p className={indexItemBottom}>Developed with C#, WPF and XAML. Customizable UI for the famous gameshow.</p>
                </div>
                <div className={indexItem}>
                    <StaticImage className={indexItemImageTop} alt="PlaceholderImage" src="../images/placeholder.png" layout="fixed" />
                    <div className={indexItemMiddle}><a target="___blank" href="https://github.com/EldritchBeauty/eldritch-beauty-website">This Website</a></div>
                    <p className={indexItemBottom}>Developed</p>
                </div>
            </div>
            <h1>Games</h1>
            <div className={indexContainer}>
                <iframe frameborder="0" src="https://itch.io/embed/2522652?border_width=5&amp;bg_color=222&amp;fg_color=78c179&amp;link_color=277bd3&amp;border_color=78c179" width="560" height="175"><a href="https://eldritchbeauty.itch.io/follow-me">Follow Me by EldritchBeauty</a></iframe>
                <iframe frameborder="0" src="https://itch.io/embed/2533419?border_width=5&amp;bg_color=222&amp;fg_color=79c27c&amp;link_color=00c319&amp;border_color=79c27c" width="560" height="175"><a href="https://eldritchbeauty.itch.io/bamboo-slice">Bamboo Slice by EldritchBeauty</a></iframe>
            </div>
            <h1>Work in Progress</h1>
        </Layout>
    )
}
export const Head = () => <title>&#127756; Eldritch &#127803; Beauty &#127756;</title>

export default IndexPage
