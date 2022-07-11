/* --> continuation. now we can getitem Id, then  we can fetch, fetching an API
dynamically (important/continue practising as it is very important).   */ 

const postListEl = document.querySelector('.post-list')

//#2 - we are using this id from local storage and passing it into renderPosts
//aka this is the first mount (when the page loads)
const id = localStorage.getItem("idexample")

function onSearchChange(event){
    //#3 - when the search changes, we are getting the id from the following code, where
    //we passed in the event in the html file (onChange)
    const id = event.target.value;
    //#4 - rendering the post from this id we are passing on
    renderPosts(id);
}
//we know the id and we know the userId, on mount we want to use "idexample" aka
//the value from local storage
async function renderPosts(id){
    //when we getting it from backend we need to wait
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //convert to javascript in order it knows how to read it
    //when we converting to js we need to wait
    const postsData =  await posts.json();    
    //now we need to map to convert the elements in the array to html
    //in order to convert an array->string, use .join
    postListEl.innerHTML = postsData.map(post => postsHTML(post)).join('');
}

function postsHTML(post){
    return  `<div class="post">
    <div class="post__title">
        ${post.title}
     </div>
    <p class="post__body">
        ${post.body}
    </p>
 </div>
 `
}

//#1 - when it mounts, we are fetching the renderPosts function
renderPosts(id);
