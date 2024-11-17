import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Card, CardContent, Box} from '@mui/material';
import { PostForm } from '../components/common/PostForm';
import { fetchPost, updatePost } from '../services/PostService';

const UpdatePost = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const post = await fetchPost(id);
            if (post) {
                setData(post);
            }
        };
        getPost();
    }, [id]);

    if (!data) {
        return <Typography variant="h6">ロード中...</Typography>;
    }

    const handleUpdatePost = async (id, updatedPost) => {
    try {
        await updatePost(id, updatedPost);
        alert("ポストが更新されました");
        navigate("/");
    } catch (error) {
        alert(error.message);
    }
};

    return (
        <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Card elevation={3} sx={{ p: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                        ポストの編集
                    </Typography>
                    <PostForm onSubmit={handleUpdatePost} data={data} buttonText="更新" />
                    <Box sx={{ mt: 2, textAlign: 'left' }}>
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
}

export default UpdatePost;