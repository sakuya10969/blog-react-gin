import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box, Stack, CircularProgress, Alert } from '@mui/material';
import { PostCard } from '../components/common/PostCard';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = 'http://server:8080'

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/posts`);
                setPosts(response.data);
            } catch (error) {
                setError('ポストの取得に失敗しました。');
                console.error('Error:', error);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                投稿一覧
            </Typography>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}

            <Stack direction="row" flexWrap="wrap" spacing={2}>
                {posts.map((post) => (
                    <Box
                        key={post.id}
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "50%",
                                md: "33.33%", 
                            },
                            padding: 1,
                        }}
                    >
                        <PostCard post={post} />
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default PostsList;