// src/components/common/PostCard.js
import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const PostCard = ({ id, title, content }) => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" color="primary" component={Link} to={`/post/${id}`}>
                    もっと読む...
                </Button>
            </CardActions>
        </Card>
    );
}