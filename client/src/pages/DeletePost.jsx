import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button,Typography, Container} from '@mui/material';
import { Header } from '../components/common/Header';
import { fetchPost } from './services/fetchPost';
import { deletePost } from '../services/PostService';

const DeletePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await fetchPost(id);
                if (response) {
                    setPost(response.data);
                } else {
                    setError("ポストが見つかりません");
                }
            } catch (err) {
                setError("ポストの読み込みに失敗しました");
            } finally {
                setLoading(false);
            }
        };
        getPost();
    }, [id]);

    const handleDeletePost = async (id) => {
    try {
        await deletePost(id);
        alert("ポストが削除されました");
        navigate("/");
    } catch (error) {
        alert(error.message);
    }
}

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    ポストの削除
                </Typography>
                <Typography variant="h5" color="textSecondary" sx={{ mt: 2, mb: 4 }}>
                    {postDetails.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                    <Button variant="contained" color="error" onClick={handleDeletePost}>削除</Button>
                    <Button onClick={() => navigate(-1)}>戻る</Button>
                </Box>
            </Container>
        </>
    );
}

export default DeletePost;