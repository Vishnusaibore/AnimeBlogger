import React,{useEffect, useState} from 'react'
import LikeButton from './LikeButton';
import ShareButton from './ShareButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import "./BlogPosts.css"

function MyPosts({Title,imgURL,Content,postDate,postid,Writer,LogStat,LogUser,delPost,onEdit}) {
//For Handling Post Content
let pcontent = Content.slice(0,300);
const[pval,setP] = useState(false)
function handleP(){ setP(true)  }
function minimizeP(){ setP(false) }

//For Handling Post Modification
 //For Editing Blog
//For Handling Edit State is Active or Not
  const[isActive,setActive]=useState(false)

  function handleActive(){
    if(Writer!==LogUser){ alert("You Not Allowed to Edit Someone'Blog")}
    else{ setActive(true)}
    }
  //For Minimizing Edit Icon
  function handleMinimize(){
  setActive(false)
  }
  //For Handling Notes Editing or Updation
  const[blog,setBlog]=useState({
    name:"",
    blogImage:"",
    content:""
  })

  function handleInput(event){
    const{name,value}=event.target
        setBlog(prevPost=>{
            return{
                ...prevPost,
                [name]:value
            }
        })
  }

  function submitPost(event){
    onEdit(postid,blog,Writer,Title)
    event.preventDefault()
    setBlog({
    name:"",
    blogImage:"",
    content:""
    })
    setActive(false)
  }

//Delete --BlogPost
const[d1,setD1]=useState(false)
function showDel(){
  setD1(true)
}
function hideDel(){
  setD1(false)
}

const[d,setD]=useState(false)
function Del(){
  if((LogUser===Writer)||(LogUser==="bsai42358@gmail.com")){
    setD(true)
  }
  else{
    setD(false)
  }
}

useEffect(()=>{
  Del()
})

function handleDelete(event){
    delPost(postid,Writer,Title)
    event.preventDefault();
}


  return (
    <div className='container-xxl'>
        <div className="card">
        <h4 className="card-title mb-2">{Title}</h4>
        <h6 className='p-date'>Published on : {postDate}</h6>
        <h6 className='p-auth'>🤵 {Writer.slice(0,10)}</h6>
        {pval?(<div className='visible'>
          <img src={imgURL}  className="card-img-top" alt="BlogImage"/>
        </div>):(<div className='invisible'></div>)}
        <div className="card-body">
        {pval?(<p className='card-text'>{Content}</p>):(<p className="card-text">{pcontent} ...</p>)}
        {pval?(<button className='btn btn-sm btn-secondary' onClick={minimizeP}>Read Less</button>):
        (<button className='btn btn-sm btn-link' onClick={handleP}>Continue Reading</button>)}
        </div>

        <div className='card-actions'>
        <ShareButton title={Title} url={postid}/>
        <LikeButton />
        {LogStat&&<button className='btn edit-btn' onClick={handleActive}><EditNoteIcon /></button>}
        {isActive&&<div className='edit-blog'>
        <form className='create-note'>
        <div className="form-floating mb-2">
        <input type="text" className="form-control" id="floatingInput" 
        onChange={handleInput} name="name" placeholder="Title" value={blog.name}/>
        <label for="floatingInput">Title</label>
        </div>
       <div className="form-floating mb-2">
       <input type="text" className="form-control" id="floatingInput" 
       onChange={handleInput} name="blogImage" placeholder="Image URL" value={blog.blogImage}/>
      <label for="floatingInput">Blog Image URL</label>
      </div>
      <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label ps-2">Content</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Start Typing Here...'
      onChange={handleInput} name="content" value={blog.content} rows="5" />
      </div>
        <button onClick={submitPost} className='btn btn-sm btn-primary'>Modify</button>
        <div className='mini-btn'>
        <button onClick={handleMinimize} className='btn btn-sm'><RemoveCircleIcon /></button>
        </div>
      </form>
        </div>}

        {d&&<button onClick={showDel} className='btn del-btn'><DeleteSweepIcon /></button>}
        {d1&&<div className='delete-window'>
        <p>Do You Want To Delete This Blog ?</p>
        <button className='btn btn-sm btn-danger me-3' onClick={handleDelete}>Yes</button> 
        <button className='btn btn-sm btn-light' onClick={hideDel}>No</button>
        </div>}
        </div>
        </div>
    </div> )
}

export default MyPosts