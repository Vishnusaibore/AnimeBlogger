import React from "react"
function Home(props) {
    return(
    <div className="home">
    <h1>This is Home</h1>
    <p>{props.text}</p>
    </div>)
}
export default Home