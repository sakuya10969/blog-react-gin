import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Box, Typography, Container, Card, CardContent } from '@mui/material';
import { fetchPost, deletePost } from '../services/PostService';

const DeletePost = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            try {
                const post = await fetchPost(id);
                if (post) {
                    setData(post);
                }
            } catch (error) {
                console.error(error);
                alert("データの取得に失敗しました");
            } finally {
                setIsLoading(false);
            }
        };
        getPost();
    }, [id]);

    const handleDeletePost = async () => {
        setIsDeleting(true);
        try {
            await deletePost(id);
            alert("ポストが削除されました");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("削除に失敗しました");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                ポストの削除
            </Typography>
            {isLoading ? (
                <Typography>データを読み込み中...</Typography>
            ) : data ? (
                <Card sx={{ mt: 4, p: 2 }}>
                    <CardContent>
                        <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
                            {data.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start', mt: 4 }}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleDeletePost}
                                disabled={isDeleting}
                                sx={{ width: 70 }}
                            >
                                {isDeleting ? "削除中..." : "削除"}
                            </Button>
                            <Button
                                    variant="outlined"
                                    color="secondary"
                                onClick={() => navigate(-1)}
                                sx={{ width: 70 }}
                            >
                                戻る
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            ) : (
                <Typography>ポストが見つかりません。</Typography>
            )}
        </Container>
    );
};

export default DeletePost;
