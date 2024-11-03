import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { fetchPosts } from '../services/postService';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const response = await fetchPosts();
            const post = response.data.find(p => p.id === parseInt(id));
            setPost(post);
        };
        getPost();
    }, [id]);

    if (!post) return <Typography>Loading...</Typography>;

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body1" component="p">
                    {post.content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PostDetail;