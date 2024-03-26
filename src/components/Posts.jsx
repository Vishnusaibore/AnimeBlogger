import React from "react";

function Posts(props){
    return(
        <div className="note">
            <h1>{props.Title}</h1>
            <img src={props.imgURL} alt="BlogImage" />
            <p>{props.Content}</p>
        </div>
    )
}
export default Posts