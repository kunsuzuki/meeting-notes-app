import MuiThemeProvider from './components/ThemeProvider';

export const metadata = {
  title: 'meeting-notes',
  description: 'We save you from tedious minute-taking and task management.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <MuiThemeProvider> {/* ✅ ここで適用 */}
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
