'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, SwipeableDrawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ ヘッダー */}
      <AppBar position="static" color="primary" sx={{ boxShadow: 'unset', marginBottom: '20px' }}>
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, fontSize: '32px',fontWeight: 'bold', textAlign: 'left' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#252525' }}>
              カイロク
            </Link>
          </Typography>
          <IconButton onClick={() => setIsOpen(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ✅ MUI のモーダルメニュー（Drawer） */}
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)} // ❌ スワイプして閉じた時
        onOpen={() => setIsOpen(true)}  // ✅ スワイプして開いた時
        disableBackdropTransition={false} // 🔥 スムーズなアニメーションを有効化
        disableDiscovery={false} // 🔥 少しスワイプするだけで開閉を可能に
      >
        <Box 
            className='menu-drawer'
            sx={{ width: '80vw', padding: 2,height: "100vh" }}
        >
          {/* ❌ バツボタンで閉じる */}
          <IconButton onClick={() => setIsOpen(false)} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>MENU</Typography>
          <List className='menu-list'>
            <ListItem component={Link} href="/" className='menu-list-item'>
              <ListItemText primary="🏠 Home" sx={{ color: '#252525' }} />
            </ListItem>
            <ListItem component={Link} href="/how-to-use" className='menu-list-item'>
              <ListItemText primary="📖 How to Use" sx={{ color: '#252525' }} />
            </ListItem>
            <ListItem component={Link} href="/privacy-policy" className='menu-list-item'>
              <ListItemText primary="🔒 Privacy Policy" sx={{ color: '#252525' }} />
            </ListItem>
            <ListItem component={Link} href="/terms-of-use" className='menu-list-item'>
              <ListItemText primary="📋 Terms of Use" sx={{ color: '#252525' }} />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
