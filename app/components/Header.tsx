'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ ヘッダー */}
      <AppBar position="static" color="primary" sx={{ boxShadow: 'unset' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#252525' }}>
              会議録音 & 文字起こしアプリ
            </Link>
          </Typography>
          <IconButton onClick={() => setIsOpen(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ✅ MUI のモーダルメニュー（Drawer） */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <IconButton onClick={() => setIsOpen(false)} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>メニュー</Typography>
          <List>
            <ListItem component={Link} href="/">
              <ListItemText primary="🏠 Home" sx={{color: '#252525'}} />
            </ListItem>
            <ListItem component={Link} href="/how-to-use">
              <ListItemText primary="📖 How to Use" sx={{color: '#252525'}} />
            </ListItem>
            <ListItem component={Link} href="/privacy-policy">
              <ListItemText primary="🔒 Privacy Policy" sx={{color: '#252525'}} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
