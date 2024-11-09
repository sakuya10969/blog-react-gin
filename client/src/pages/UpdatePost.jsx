import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Container} from '@mui/material';
import Header from '../components/common/Header';
import PostForm from '../components/common/PostForm';
import Button from '../components/common/Button';
import fetchPost from './services/fetchPost';
import { updatePost } from '../services/PostService';

const apiUrl = 'http://server:8080';

export const UpdatePost = () => {
    const { id } = useParams();
    const [initialData, setInitialData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const data = await fetchPost(id);
            if (data) {
                setInitialData(data);
            }
        };
        getPost();
    }, [id]);

    if (!initialData) {
        return <Typography variant="h6">ロード中...</Typography>;
    }

    const handleUpdatePost = async (id, updatedPost) => {
    try {
        await updatePost(id, updatedPost);
        alert("ポストが更新されました");
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
                    ポストの編集
                </Typography>
                <PostForm initialData={initialData}>
                    <Button onClick={handleUpdatePost(id, initialData)}>更新</Button>
                </PostForm>
            </Container>
        </>
    );
}