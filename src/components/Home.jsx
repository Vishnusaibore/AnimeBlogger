import React from "react"
var home_content="Yes, it is possible to specify custom routes other than localhost:3000 in a React app. When you say I assume you are referring to routes other than the default route provided by the development server, typically localhost:3000."

function Home() {
    return(
    <div className="home">
    <h4>Home</h4>
    <p>{home_content}</p>
    </div>)
}
export default Home