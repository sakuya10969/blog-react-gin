import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Box, Grid, CircularProgress, Alert } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('/api/posts');  // APIエンドポイントを適宜変更
                setPosts(response.data);
            } catch (error) {
                setError('投稿の取得に失敗しました。');
                console.error('Error:', error);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Header />

            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                    投稿一覧
                </Typography>

                {loading && <CircularProgress />}
                {error && <Alert severity="error">{error}</Alert>}

                <Grid container spacing={2}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <PostCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Footerの表示 */}
            <Footer />
        </>
    );
};

export default PostsList;
