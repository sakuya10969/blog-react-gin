import React from 'react';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import PostForm from '../components/common/PostForm';
import Button from '../components/common/Button';
import updatePost from '../services/PostService';
    
export const CreatePost = () => {
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
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    新しいポストの作成
                </Typography>
                <PostForm>
                    <Button onClick={handleCreatePost} type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        送信
                    </Button>
                </PostForm>
            </Container>
        </>
    );
}