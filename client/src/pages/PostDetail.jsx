import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import Button from '../components/common/Button';
import fetchPost from './services/fetchPost';

export const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const { post } = await fetchPost(id);
            setPost(post);
        };
        getPost();
    }, [id]);

    if (!post) {
        return <Typography variant="h6">ポストが見つかりません。</Typography>;
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body1">{post.content}</Typography>
            <Box display="flex" gap={2} mt={2}>
                <Button component={Link} to={`post/update/${id}`} variant="contained" color="primary">
                    ポストの編集
                </Button>
                <Button component={Link} to={`post/delete/${id}`} variant="contained" color="error">
                    ポストの削除
                </Button>
            </Box>
        </Container>
    );
};