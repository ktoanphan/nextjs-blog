import React, { Fragment, useEffect, useState } from 'react';

const baseURL = "https://my-fullstack-demo.herokuapp.com/posts";


const Quote = () => {

    const [posts, setPosts] = useState([]); 

    const getPosts = async () => {
        try {
            const response = await fetch(baseURL); 
            const jsonData = await response.json();
            setPosts(jsonData);
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    console.log(posts);

    return (
        <Fragment>          
        </Fragment>
    );

}

export default Quote;