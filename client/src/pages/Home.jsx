import React, { useEffect, useState } from 'react';
import { Typography, Container, Pagination, Box } from '@mui/material';
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
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    ブログの投稿
                </Typography>
                {posts.map((post) => (
                    <PostCard key={post.id} id={post.id} title={post.title} content={post.content} />
                ))}
                <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                    <Pagination
                        count={Math.ceil(totalPosts / postsPerPage)}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            </Container>
            <Footer />
        </>
    );
}

export default Home;