import React, { Fragment, useEffect, useState } from 'react';

import EditPost from "./EditPost";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


const baseURL = "https://my-fullstack-demo.herokuapp.com/posts";


const ListPosts = () => {

    const [posts, setPosts] = useState([]);
    const [description, setDescription] = useState("");


    const getPosts = async () => {
        try {
            const response = await fetch(baseURL); 
            const jsonData = await response.json();
            setPosts(jsonData)
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);


    console.log(posts); 


    // deletePost 
    const deletePost = async (id) => {
        try {
            const deletePost = await fetch(`${baseURL}/${id}`, {
                method: "DELETE"
            });

            // use a filter to update the DOM instantly to reflect that the post was deleted
            setPosts(posts.filter(post => post.post_id !== id)); 

            console.log(deletePost);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>          
        {posts.map(post => (
            <div className="card">
                <h1>{post.post_id}</h1>
                <h3>{post.description}</h3>
                <EditPost post={post}></EditPost>                    
                <Button onClick={() => deletePost(post.post_id)}>Delete</Button>
            </div>

        ))}

        <style jsx>{`
                  
                          .card {
                            margin: 1rem;
                            flex-basis: 45%;
                            padding: 1.5rem;
                            text-align: left;
                            color: inherit;
                            text-decoration: none;
                            border: 1px solid #eaeaea;
                            border-radius: 10px;
                            transition: color 0.15s ease, border-color 0.15s ease;
                          }
                  
                          .card:hover,
                          .card:focus,
                          .card:active {
                            color: #0070f3;
                            border-color: #0070f3;
                          }
                  
                          .card td {
                            margin: 0;
                            font-size: 1.5rem;
                          }

            `}</style>

        </Fragment>
    );

}

export default ListPosts;