// src/pages/EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import Header from '../components/common/Header';
import PostForm from '../components/common/PostForm';

// 仮のデータ
const postDetails = {
    1: { title: 'First Post', content: 'This is the content of the first post.' },
    2: { title: 'Second Post', content: 'This is the content of the second post.' },
    3: { title: 'Third Post', content: 'This is the content of the third post.' }
};

function EditPost() {
    const { id } = useParams();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        // ID に基づいて投稿データを取得し、初期データとして設定
        const post = postDetails[id];
        if (post) {
            setInitialData(post);
        }
    }, [id]);

    const handleUpdatePost = (updatedPost) => {
        console.log("Post updated:", { id, ...updatedPost });
        // 更新処理をここで実行（API呼び出しなど）
    };

    if (!initialData) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    Edit Post
                </Typography>
                <PostForm onSubmit={handleUpdatePost} initialData={initialData} />
            </Container>
        </>
    );
}

export default EditPost;