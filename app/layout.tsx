import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SORAA — join the collective. skip the pitch.',
  description: 'AI-powered matchmaking for micro-influencers and ambitious local brands.',
};

export const viewport: Viewport = {
  themeColor: '#5a0f18',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-brand-800">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        {/* Subtle background grain behind all content */}
        <div className="fx-grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
