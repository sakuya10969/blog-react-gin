// src/pages/CreatePost.jsx
import React from 'react';
import { Typography, Container } from '@mui/material';
import Header from '../components/common/Header';
import PostForm from '../components/common/PostForm';

function CreatePost() {
    const handleCreatePost = (post) => {
        console.log("新しいポストの作成", post);
        // APIでのデータ送信などをここで実行
    };

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    新しいポストの作成
                </Typography>
                <PostForm onSubmit={handleCreatePost} />
            </Container>
        </>
    );
}

export default CreatePost;