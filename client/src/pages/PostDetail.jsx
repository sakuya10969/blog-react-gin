import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';
import Header from '../components/common/Header';

const postDetails = {
    1: { title: '最初のポスト', content: '最初のポストです' },
    2: { title: '2つ目のポスト', content: '2つ目のポストです.' },
    3: { title: '3つ目のポスト', content: '3つ目のポストです' }
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
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    {post.content}
                </Typography>
                <Button
                    component={Link}
                    to={`/edit/${id}`}
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    ポストの編集
                </Button>
            </Container>
        </>
    );
}

export default PostDetail;