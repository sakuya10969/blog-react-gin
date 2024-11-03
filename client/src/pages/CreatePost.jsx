import React from 'react';
import axios from 'axios';
import { Typography, Container } from '@mui/material';
import Header from '../components/common/Header';
import PostForm from '../components/common/PostForm';


const apiUrl = 'http://api:8080';
function CreatePost() {
    const createPost = async (post) => {
        try {
            const response = await axios.post(`${apiUrl}/posts`, post, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log("新しいポストの作成", response.data);
        } catch (error) {
            console.log("エラー:", error);
        }
    };

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    新しいポストの作成
                </Typography>
                <PostForm onSubmit={createPost} />
            </Container>
        </>
    );
}

export default CreatePost;