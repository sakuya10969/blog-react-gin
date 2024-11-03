// src/pages/EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import Header from '../components/common/Header';
import PostForm from '../components/common/PostForm';

// 仮のデータ
const postDetails = {
    1: { title: '最初のポスト', content: '最初のポストです' },
    2: { title: '2つ目のポスト', content: '2つ目のポストです.' },
    3: { title: '3つ目のポスト', content: '3つ目のポストです' }
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
        console.log("ポストの編集:", { id, ...updatedPost });
        // 更新処理をここで実行（API呼び出しなど）
    };

    if (!initialData) {
        return <Typography variant="h6">ロード中...</Typography>;
    }

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
                    ポストの編集
                </Typography>
                <PostForm onSubmit={handleUpdatePost} initialData={initialData} />
            </Container>
        </>
    );
}

export default EditPost;