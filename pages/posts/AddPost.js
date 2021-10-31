import React, { Fragment, useState } from 'react';

const baseURL = "https://my-fullstack-demo.herokuapp.com/posts";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';


const AddPost = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm  = async e => {
        e.preventDefault();
        try {
            const body = {description}; 
            const response = await fetch(baseURL, {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            //  refresh the DOM to update the new post being added.
            window.location = "/";
        } catch(err) {
            console.log(err.message);
        }

    }

    return (
        <Fragment>
            <form className="form" onSubmit={onSubmitForm}>
                <TextField
                    margin="normal"
                    size="Normal"
                    fullWidth
                    id="standard-basic" 
                    label="What's on your mind today?" 
                    variant="standard" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
            </form>

            <style jsx>{`
                .form {
                    width: 50%;
                }
                  
            `}</style>
        </Fragment>
    );
}

export default AddPost;