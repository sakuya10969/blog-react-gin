import React from 'react';
import { Typography, Container } from '@mui/material';
import PostCard from '../components/common/PostCard';
import Header from '../components/common/Header';

const posts = [
    { id: 1, title: '最初のポスト', summary: '最初のポストです' },
    { id: 2, title: '2つ目のポスト', summary: '2つ目のポストです' },
    { id: 3, title: '3つ目のポスト', summary: '3つ目のポストです' }
];

function Home() {
    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    ブログの投稿
                </Typography>
                {posts.map((post) => (
                    <PostCard key={post.id} id={post.id} title={post.title} summary={post.summary} />
                ))}
            </Container>
        </>
    );
}

export default Home;