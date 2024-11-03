// src/components/common/PostForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function PostForm({ onSubmit, initialData = {} }) {
    const [title, setTitle] = useState(initialData.title || '');
    const [content, setContent] = useState(initialData.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                label="Title"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Content"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                送信
            </Button>
        </Box>
    );
}

export default PostForm;