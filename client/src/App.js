import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const CreatePost = lazy(() => import('./pages/CreatePost'));
const UpdatePost = lazy(() => import('./pages/UpdatePost'));
const DeletePost = lazy(() => import('./pages/DeletePost'));
const App = () => {
    return (
        <ErrorBoundary>
            <CssBaseline />
            <Layout>
                <Container maxWidth="md">
                    <Suspense fallback={<div>ロード中...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/post/:id" element={<PostDetail />} />
                            <Route path="/post/create" element={<CreatePost />} />
                            <Route path="/post/update/:id" element={<UpdatePost />} />
                            <Route path="/post/delete/:id" element={<DeletePost />} />
                        </Routes>
                    </Suspense>
                </Container>
            </Layout>
        </ErrorBoundary>
    );
}

export default App;