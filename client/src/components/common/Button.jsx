// src/components/common/Button.js
import React from 'react';
import { Button as MuiButton } from '@mui/material';

function Button({ children, ...props }) {
    return (
        <MuiButton
            variant="contained"
            color="primary"
            {...props}
            sx={{ px: 3, py: 1.5, borderRadius: 2, ...props.sx }}
        >
            {children}
        </MuiButton>
    );
}

export default Button;