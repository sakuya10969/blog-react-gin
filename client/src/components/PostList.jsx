import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';
import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetchPosts();
            setPosts(response.data);
        };
        getPosts();
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Blog
            </Typography>
            <Box
                display="flex"
                flexWrap="wrap"
                gap={2}
            >
                {posts.map((post) => (
                    <Card key={post.id} sx={{ width: '100%', maxWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {post.content.slice(0, 50)}...
                            </Typography>
                            <Button component={Link} to={`/posts/${post.id}`} size="small" color="primary">
                                Read More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Button variant="contained" color="primary" component={Link} to="/create" sx={{ marginTop: 2 }}>
                Create New Post
            </Button>
        </Box>
    );
};

export default PostList;