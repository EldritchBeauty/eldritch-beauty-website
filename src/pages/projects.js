import * as React from "react"
import Layout from "./layout"

const IndexPage = () => {
    return (
        <Layout pageTitle="Project">
            <h1>Applications</h1>
            <p>sjdngiupbnaopknbopernfg</p>
            <h1>Games</h1>
            <p>
                <iframe frameborder="0" src="https://itch.io/embed/2522652?border_width=5&amp;bg_color=222&amp;fg_color=78c179&amp;link_color=277bd3&amp;border_color=78c179" width="560" height="175"><a href="https://eldritchbeauty.itch.io/follow-me">Follow Me by EldritchBeauty</a></iframe>
            </p>
            <p>
                <iframe frameborder="0" src="https://itch.io/embed/2533419?border_width=5&amp;bg_color=222&amp;fg_color=79c27c&amp;link_color=00c319&amp;border_color=79c27c" width="560" height="175"><a href="https://eldritchbeauty.itch.io/bamboo-slice">Bamboo Slice by EldritchBeauty</a></iframe>
            </p>
            <h1>Work in Progress</h1>
        </Layout>
    )
}
export const Head = () => <title>&#127756; Eldritch &#127803; Projects &#127756;</title>

export default IndexPage
