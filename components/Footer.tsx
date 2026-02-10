'use client';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xl text-gray-300 mb-6 font-light">
          one authentic connection at a time
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400 mb-4">
          <a href="https://joinsoraa.com" className="hover:text-gray-300 transition-colors">
            joinsoraa.com
          </a>
          <span className="hidden md:inline">•</span>
          <a href="mailto:joinsoraa@gmail.com" className="hover:text-gray-300 transition-colors">
            joinsoraa@gmail.com
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="https://www.instagram.com/joinsoraa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            @joinsoraa
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Copyright © 2025 SORAA
        </p>
      </div>
    </footer>
  );
}
