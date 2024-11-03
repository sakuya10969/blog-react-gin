import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import { Container } from '@mui/material';

function App() {
    return (
        <Container maxWidth="md">
            <Router>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/create" element={<CreatePost />} />
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
