
import React from 'react'

async function Page(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    if(!response.ok){ throw new Error('Not Found!'); }
    const posts = await response.json();

    return (
        <div>
            {posts.map((post:any) =>(
                <div key={post.id}>{post.id} : {post.title}</div>
            ))}
        </div>
    )
}


export default Page
