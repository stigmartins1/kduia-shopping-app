import React from "react";

const Button = () => {
    const [likes, setLikes] = React.useState(0);
    const handleClick = () => {
        console.log("increment like count");
        setLikes(likes + 1);
        console.log(likes);
    }
    return (
        <button onClick={handleClick}>Like {likes}</button>
    )
}

export default Button;