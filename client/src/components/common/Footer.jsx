import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper', mt: 'auto' }}>
            <Container maxWidth="md">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} 俺のブログ
                </Typography>
            </Container>
        </Box>
    );
}