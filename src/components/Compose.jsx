import React,{useState} from "react";

function Compose(props){
    const[post,setPost] = useState({
        name:"",
        blogImage:"",
        content:""
    })
    //Create Post
    function handleInput(event){
        const{name,value}=event.target
        setPost(prevPost=>{
            return{
                ...prevPost,
                [name]:value
            }
        })
    }

    function submitPost(event){
        props.onAdd(post)
        event.preventDefault()
        setPost({
            name:"",
            blogImage:"",
            content:""
        })
    }
    //
    return(<div className="container">
    <h3>Compose</h3>
    <form>
        <div >
            <label className="form-label">Title</label>
            <input onChange={handleInput} type="text" className="form-control" name="name" autocomplete="off" value={post.name}/>
            <label className="form-label">ImageURL</label>
            <input onChange={handleInput} type="url" className="form-control" name="blogImage" autocomplete="off" value={post.blogImage}/>
            <label className="form-label">Post</label>
            <textarea onChange={handleInput} name="content" className="form-control mb-1" value={post.content}/>
            <button onClick={submitPost} type="submit" className="btn btn-secondary">Publish</button>
        </div>
    </form>
   </div>
    )
}
export default Compose