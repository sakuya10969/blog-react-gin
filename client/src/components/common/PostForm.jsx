import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

export const PostForm = ({ onSubmit, data = {title: '', content: ''}, buttonText }) => {
    const [title, setTitle] = useState(data.title || '');
    const [content, setContent] = useState(data.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                label="タイトル"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="内容"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                {buttonText}
            </Button>
        </Box>
    );
}