//import React from "react";

const Address = ({email, phone}) => {
    return (
        <div>
            <h2>&lt;address&gt;: The Contact Address element</h2>
            <p>The &lt;address&gt; HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.</p>
            <h3>Example:</h3>
            <p>Contact the author of this page:</p>
            <address>
                <ul>
                    <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
                    <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
                </ul>
            </address>
        </div>
    )
}

export default Address;