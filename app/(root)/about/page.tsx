
import React from 'react'

interface  Post{
    title:string;
    id:number | string;
}

async function Page(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    if(!response.ok){ throw new Error('Not Found!'); }
    const posts = await response.json();

    return (
        <div>
            {posts.map((post: Post ) =>(
                <div key={post.id}>{post.id} : {post.title}</div>
            ))}
        </div>
    )
}


export default Page
