// src/pages/PostDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';
import Header from '../components/common/Header';

// 仮の投稿データ
const postDetails = {
    1: { title: 'First Post', content: 'This is the content of the first post.' },
    2: { title: 'Second Post', content: 'This is the content of the second post.' },
    3: { title: 'Third Post', content: 'This is the content of the third post.' }
};

function PostDetail() {
    const { id } = useParams();
    const post = postDetails[id];

    if (!post) {
        return (
            <Container maxWidth="md">
                <Header />
                <Typography variant="h6" color="error" sx={{ mt: 4 }}>
                    Post not found
                </Typography>
            </Container>
        );
    }

    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body1" paragraph>
                    {post.content}
                </Typography>
                <Button
                    component={Link}
                    to={`/edit/${id}`}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Edit Post
                </Button>
            </Container>
        </>
    );
}

export default PostDetail;