// src/components/common/PostForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export const PostForm = ({ onSubmit, initialData = {}, buttonText }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [content, setContent] = useState(initialData.content || '');

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