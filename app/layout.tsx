import type { Metadata, Viewport } from 'next';
import './globals.css';
import SubtleBackdrop from '@/components/SubtleBackdrop';

export const metadata: Metadata = {
  title: 'SORAA — join the collective. skip the pitch.',
  description: 'AI-powered matchmaking for micro-influencers and ambitious local brands.',
};

export const viewport: Viewport = {
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
      <body>
        <SubtleBackdrop />
        {children}
      </body>
    </html>
  );
}
