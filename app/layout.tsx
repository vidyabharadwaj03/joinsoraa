import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SORAA — join the collective. skip the pitch.',
  description: 'AI-powered matchmaking for micro-influencers and ambitious local brands.',
  themeColor: '#110607',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
