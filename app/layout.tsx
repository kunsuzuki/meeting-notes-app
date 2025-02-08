import MuiThemeProvider from './components/ThemeProvider';

export const metadata = {
  title: 'カイロク｜会議録音要約アプリ',
  description: 'カイロクは会議などの音声の録音、AIによる要約・TODO抽出を行うサービスです。',
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
