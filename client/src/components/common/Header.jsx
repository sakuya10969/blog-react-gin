// src/components/common/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        俺のブログ
                    </Link>
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/create" variant="outlined" sx={{ borderColor: 'white' }}>
                        新しいポストの作成
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;