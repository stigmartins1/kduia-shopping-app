//import React from "react";

const A = (props) => {
    return (
        <div>
            <h2>&lt;a&gt;: The Anchor Element</h2>
            <p>
                The &lt;a&gt; HTML element (or anchor element), with its href attribute, 
                creates a hyperlink to web pages, files, email addresses, locations in 
                the same page, or anything else a URL can address.
            </p>
            <p>
                Content within each &lt;a&gt; should indicate the link's destination. If 
                the href attribute is present, pressing the enter key while focused on the 
                &lt;a&gt; element will activate it.
            </p>

            <h3>Example:</h3>
            
            <p>You can reach me at:</p>

            <ul>
            <li>Website: <a href={props.url}>{props.url}</a></li>
            <li>Email: <a href={"mailto:" + props.email}>{props.email}</a></li>
            <li>Phone: <a href={`tel:${props.phone}`}>{props.phone}</a></li>
            </ul>
        </div>
    )
}

export default A;