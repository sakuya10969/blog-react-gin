import React, { useEffect } from 'react';
import { Button, Typography, Container, Pagination, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { PostCard } from '../components/common/PostCard';
import { postsSelector, pagesState, totalPostsState, postsPerPage } from '../recoil/PostAtom';

const Home = () => {
    const { posts, totalPosts } = useRecoilValue(postsSelector);
    const [page, setPage] = useRecoilState(pagesState);
    const setTotalPosts = useSetRecoilState(totalPostsState);

    useEffect(() => {
        setTotalPosts(totalPosts);
    }, [totalPosts, setTotalPosts]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
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
                        key={post.ID} 
                        id={post.ID}
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
    );
}

export default Home;