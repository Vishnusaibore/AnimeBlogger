import * as React from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';

function Compose(props){
    const[post,setPost] = React.useState({
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
        let Current_User=props.c_user
        props.onAdd(post,Current_User)
        event.preventDefault()
        setPost({
            name:"",
            blogImage:"",
            content:""
        })
    }
    //
    
    return(
    <div className='container-fluid' id="compose">
    <form className='create-note'>
    <div className='compose-header'>
    <h5>Compose Your Blog Here ✍</h5>
    </div>
    <div className="form-floating mb-2">
    <input type="text" className="form-control" id="floatingInput" 
    onChange={handleInput} name="name" placeholder="Title" value={post.name}/>
    <label for="floatingInput">Title</label>
    </div>
    <div className="form-floating mb-2">
    <input type="text" className="form-control" id="floatingInput" 
    onChange={handleInput} name="blogImage" placeholder="Image URL" value={post.blogImage}/>
    <label for="floatingInput">Blog Image URL</label>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Content</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Start Typing Here...'
    onChange={handleInput} name="content" value={post.content} rows="10" />
    </div>
    <button className="btn btn-primary" onClick={submitPost}><PostAddIcon /> Publish</button>
     </form>
     </div>
    )
}
export default Compose