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
            sx={{ width: 250, padding: 2,height: "100vh" }}
        >
          {/* ❌ バツボタンで閉じる */}
          <IconButton onClick={() => setIsOpen(false)} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>メニュー</Typography>
          <List className='menu-list'>
            <ListItem component={Link} href="/" sx={{ border: '1px solid #252525', borderRadius: '8px' }}>
              <ListItemText primary="🏠 Home" sx={{ color: '#252525' }} />
            </ListItem>
            <ListItem component={Link} href="/how-to-use" sx={{ border: '1px solid #252525', borderRadius: '8px' }}>
              <ListItemText primary="📖 How to Use" sx={{ color: '#252525' }} />
            </ListItem>
            <ListItem component={Link} href="/privacy-policy" sx={{ border: '1px solid #252525', borderRadius: '8px' }}>
              <ListItemText primary="🔒 Privacy Policy" sx={{ color: '#252525' }} />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Header;
