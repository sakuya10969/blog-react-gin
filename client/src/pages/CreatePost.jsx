import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { PostForm } from '../components/common/PostForm';
import { createPost } from '../services/PostService';
    
const CreatePost = () => {
    const navigate = useNavigate();
    const handleCreatePost = async (post) => {
        try {
            await createPost(post);
            alert("ポストが作成されました");
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };
    
    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    新しいポストの作成
                </Typography>
                <PostForm onSubmit={handleCreatePost} buttonText="作成" />
                <Button variant="outlined" color="secondary" onClick={() => navigate(-1)} sx={{"mt": 2}}>戻る</Button>
            </Container>
        </>
    );
}

export default CreatePost;