import React, { useEffect, useState } from 'react';
import { Button, Typography, Container, Pagination, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { PostCard } from '../components/common/PostCard';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import axios from 'axios';

const apiUrl = 'http://server:8080';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const postsPerPage = 10;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${apiUrl}`, {
                    params: {
                        _page: page,
                        _limit: postsPerPage,
                    },
                });
                
                setPosts(response.data);
                
                const totalCount = response.headers['x-total-count'];
                if (totalCount) {
                    setTotalPosts(parseInt(totalCount, 10));
                }
            } catch (error) {
                console.log("ポストの取得に失敗しました:", error);
            }
        };
        fetchPosts();
    }, [page]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Container maxWidth="md" sx={{ pt: 4, pb: 6 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        ブログの投稿
                    </Typography>
                    <Button 
                        color="primary" 
                        variant="contained" 
                        component={Link} 
                        to="/post/create" 
                        sx={{ px: 3, py: 1, boxShadow: 3 }}
                    >
                        新しいポストを作成
                    </Button>
                </Box>

                <Box display="flex" flexDirection="column" gap={3} sx={{ mb: 4 }}>
                    {posts.map((post) => (
                        <PostCard 
                            key={post.id} 
                            id={post.id} 
                            title={post.title} 
                            content={post.content} 
                            sx={{ boxShadow: 2, borderRadius: 2, p: 2 }}
                        />
                    ))}
                </Box>

                <Box display="flex" justifyContent="center" mt={4}>
                    <Pagination
                        count={Math.ceil(totalPosts / postsPerPage)}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        sx={{ button: { fontSize: '1rem' }, "& .MuiPaginationItem-root": { borderRadius: '8px' } }}
                    />
                </Box>
            </Container>
        </>
    );
}

export default Home;