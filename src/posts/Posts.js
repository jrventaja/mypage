import React, { useEffect, useState } from 'react';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => {
                setPosts(jsonData);
            });
    }, []);
    return (
        <div>
            {Array.isArray(posts) && posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.datetime}>
                         <p>{post.datetime}</p>
                        <h2>{post.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        <div><b>tags:</b> {post.tags}</div>
                        <hr/>
                    </div>
                ))
            ) : (
                <div>No posts available</div>
            )}
        </div>
    );
};

export default Posts;
