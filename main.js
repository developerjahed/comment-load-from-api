function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data));
}


function displayComment(comments){
    const commentContainer=document.getElementById('comment-container');
    for(const comment of comments){
       const div=document.createElement('div');
       div.innerHTML=`
       <h5>Name: ${comment.name}</h5>
       <h5>Email: ${comment.email}</h5>
       <p>Comment: ${comment.body}
       `;
       commentContainer.appendChild(div);
       div.classList.add('comment-box')
    }

}
loadComment()