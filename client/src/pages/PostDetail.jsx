import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box, Card, CardContent, CircularProgress } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import { fetchPost } from '../services/PostService';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            try {
                const post = await fetchPost(id);
                setPost(post);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getPost();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (!post) {
        return (
            <Container maxWidth="md">
                <Typography variant="h6" color="error" align="center">
                    ポストが見つかりません。
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button variant="outlined" color="secondary" onClick={() => navigate(-1)}>
                        戻る
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Card
                sx={{
                    padding: 3,
                    boxShadow: 5,
                    borderRadius: 3,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                        boxShadow: 8,
                    },
                }}
            >
                <CardContent>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                    >
                        {post.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mb: 2, lineHeight: 1.8, color: "#616161" }}
                    >
                        {post.content}
                    </Typography>
                    <Box
                        display="flex"
                        gap={2}
                        mt={2}
                        sx={{
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            component={Link}
                            to={`/post/update/${id}`}
                            variant="contained"
                            color="primary"
                            startIcon={<Edit />}
                        >
                            ポストの編集
                        </Button>
                        <Button
                            component={Link}
                            to={`/post/delete/${id}`}
                            variant="contained"
                            color="error"
                            startIcon={<Delete />}
                        >
                            ポストの削除
                        </Button>
                    </Box>
                    <Box mt={3} textAlign="left">
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => navigate(-1)}
                        >
                            戻る
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>

    );
};

export default PostDetails;
