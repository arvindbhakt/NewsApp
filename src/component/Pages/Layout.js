import React from 'react';
import Navbar from '../Navbar';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
const Layout = () => {
    return (
        <>
            <Container maxWidth="xl" >
            <CssBaseline/>
            <Navbar/>
            <Outlet/>
            </Container>
        </>
    );
};

export default Layout;
