//import React from "react";

const Abbr = () => {
    return (
        <div>
            <h2>&lt;Abbr&gt;: The Abbreviation element</h2>
            
            <p>The &lt;abbr&gt; HTML element represents an abbreviation or acronym.</p>

            <p>
                When including an abbreviation or acronym, provide a full expansion of the term 
                in plain text on first use, along with the &lt;abbr&gt; to mark up the abbreviation. 
                This informs the user what the abbreviation or acronym means.
            </p>

            <h3>Example:</h3>
            <p>
                You can use <abbr>CSS</abbr> (Cascading Style Sheets) to style your <abbr>HTML
                </abbr> (HyperText Markup Language). Using style sheets, you can 
                keep your <abbr>CSS</abbr> presentation layer and <abbr>HTML</abbr> content 
                layer separate. This is called "separation of concerns."
            </p>
        </div>
    )
}

export default Abbr;