import React, { useState } from 'react';
import { createPost } from '../services/postService';
import { TextField, Button, Typography } from '@mui/material';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Create New Post
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Create Post
                </Button>
            </form>
        </div>
    );
};

export default CreatePost;