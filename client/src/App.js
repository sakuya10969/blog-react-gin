import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const CreatePost = lazy(() => import('./pages/CreatePost'));
const EditPost = lazy(() => import('./pages/EditPost'));

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <CssBaseline />
                <Layout>
                    <Container maxWidth="md">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/posts/:id" element={<PostDetail />} />
                                <Route path="/create" element={<CreatePost />} />
                                <Route path="/edit/:id" element={<EditPost />} />
                            </Routes>
                        </Suspense>
                    </Container>
                </Layout>
            </Router>
        </ErrorBoundary>
    );
}

export default App;