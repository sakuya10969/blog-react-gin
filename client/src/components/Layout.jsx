// components/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        俺のブログ
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                {children}
            </Container>

            <Box component="footer" sx={{ py: 2, bgcolor: 'background.paper' }}>
                <Container maxWidth="md">
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'© '}
                        俺のブログ {new Date().getFullYear()}
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default Layout;
