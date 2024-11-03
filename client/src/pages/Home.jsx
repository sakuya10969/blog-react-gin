// src/pages/Home.jsx
import React from 'react';
import { Typography, Container } from '@mui/material';
import PostCard from '../components/common/PostCard';
import Header from '../components/common/Header';

const posts = [
    { id: 1, title: 'First Post', summary: 'This is the summary of the first post.' },
    { id: 2, title: 'Second Post', summary: 'This is the summary of the second post.' },
    { id: 3, title: 'Third Post', summary: 'This is the summary of the third post.' }
];

function Home() {
    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    Blog Posts
                </Typography>
                {posts.map((post) => (
                    <PostCard key={post.id} id={post.id} title={post.title} summary={post.summary} />
                ))}
            </Container>
        </>
    );
}

export default Home;