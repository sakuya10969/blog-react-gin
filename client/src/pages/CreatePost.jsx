import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { PostForm } from '../components/common/PostForm';
import { createPost } from '../services/PostService';
import { postsState } from '../recoil/PostAtom';
    
const CreatePost = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useRecoilState(postsState);

    const handleCreatePost = async (post) => {
        try {
            const createdPost = await createPost(post);
            setPosts((prevPosts) => [...prevPosts, createdPost]);
            alert("ポストが作成されました");
            navigate("/");
        } catch (error) {
            alert(error.message);
            throw error;
        }
    };
    
    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                新しいポストの作成
            </Typography>
            <PostForm onSubmit={handleCreatePost} buttonText="作成" />
            <Button variant="outlined" color="secondary" onClick={() => navigate(-1)} sx={{"mt": 2}}>戻る</Button>
        </Container>
    );
}

export default CreatePost;